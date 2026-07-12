import DashboardLayout from "../layouts/DashboardLayout";
import TripForm from "../components/TripForm";
import TripTable from "../components/TripTable";
import { useFleet } from "../context/FleetContext";

function Trips() {
  const {
    trips,
    setTrips,
    vehicles,
    setVehicles,
    drivers,
    setDrivers,
  } = useFleet();

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div className="flex justify-between items-center">

          <h1 className="text-3xl font-bold">
            Trips
          </h1>

          <TripForm
            trips={trips}
            setTrips={setTrips}
            vehicles={vehicles}
            setVehicles={setVehicles}
            drivers={drivers}
            setDrivers={setDrivers}
          />

        </div>

        <TripTable
          trips={trips}
          setTrips={setTrips}
          vehicles={vehicles}
          setVehicles={setVehicles}
          drivers={drivers}
          setDrivers={setDrivers}
        />

      </div>
    </DashboardLayout>
  );
}

export default Trips;