import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import API from "../api/vehicleApi";

const FleetContext = createContext();

export const FleetProvider = ({ children }) => {
  // Vehicles
  const [vehicles, setVehicles] = useState([]);

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

  // Fuel Logs
  const [fuelLogs, setFuelLogs] = useState([]);

  // Maintenance
  const [maintenance, setMaintenance] = useState([
    {
      id: 1,
      vehicle: "Truck-101",
      service: "Oil Change",
      mechanic: "Raj Motors",
      dueDate: "2026-07-20",
      cost: "4500",
      status: "Pending",
    },
    {
      id: 2,
      vehicle: "Bus-204",
      service: "Brake Inspection",
      mechanic: "AutoCare",
      dueDate: "2026-07-10",
      cost: "7200",
      status: "Completed",
    },
    {
      id: 3,
      vehicle: "Van-305",
      service: "Engine Service",
      mechanic: "Speed Garage",
      dueDate: "2026-07-05",
      cost: "14800",
      status: "Overdue",
    },
  ]);

  // Fetch vehicles from backend
  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const res = await API.get("/vehicles");
      setVehicles(res.data);
    } catch (err) {
      console.error("Error fetching vehicles:", err);
    }
  };

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

        maintenance,
        setMaintenance,

        fetchVehicles,
      }}
    >
      {children}
    </FleetContext.Provider>
  );
};

export const useFleet = () => useContext(FleetContext);