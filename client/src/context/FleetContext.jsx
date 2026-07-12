import { createContext, useContext, useState } from "react";

const FleetContext = createContext();

export const FleetProvider = ({ children }) => {
  // Vehicles
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      registration: "OD02AB1234",
      name: "Tata Ace",
      type: "Mini Truck",
      capacity: "1500 kg",
      status: "Available",
    },
    {
      id: 2,
      registration: "OD14XY5678",
      name: "Ashok Leyland",
      type: "Truck",
      capacity: "5000 kg",
      status: "On Trip",
    },
  ]);

  // Drivers
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      license: "DL123456",
      phone: "9876543210",
      experience: 5,
      status: "Available",
    },
    {
      id: 2,
      name: "Priya Das",
      license: "DL789654",
      phone: "9123456789",
      experience: 3,
      status: "Assigned",
    },
  ]);

  // Trips
  const [trips, setTrips] = useState([
    {
        id: 1,
        vehicle: "OD02AB1234",
        driver: "Rahul Sharma",
        source: "Bhubaneswar",
        destination: "Cuttack",
        date: "2026-07-12",
        status: "In Progress",
    },
]);
  const [fuelLogs, setFuelLogs] = useState([]);

  return (
    <FleetContext.Provider
      value={{
        vehicles,
        setVehicles,
        drivers,
        setDrivers,
        trips,
        setTrips,
        fuelLogs,
        setFuelLogs,
      }}
    >
      {children}
    </FleetContext.Provider>
  );
};

export const useFleet = () => useContext(FleetContext);