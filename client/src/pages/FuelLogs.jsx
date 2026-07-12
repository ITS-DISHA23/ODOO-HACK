import DashboardLayout from "../layouts/DashboardLayout";
import FuelForm from "../components/FuelForm";
import FuelTable from "../components/FuelTable";
import { useFleet } from "../context/FleetContext";

function FuelLogs() {
  const {
    fuelLogs,
    setFuelLogs,
    vehicles,
    drivers,
  } = useFleet();

  return (
    <DashboardLayout>
      <div>

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            Fuel Logs
          </h1>

          <FuelForm
            fuelLogs={fuelLogs}
            setFuelLogs={setFuelLogs}
            vehicles={vehicles}
            drivers={drivers}
          />

        </div>

        <FuelTable
          fuelLogs={fuelLogs}
          setFuelLogs={setFuelLogs}
        />

      </div>
    </DashboardLayout>
  );
}

export default FuelLogs;