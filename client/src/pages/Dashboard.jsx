import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import { useFleet } from "../context/FleetContext";
import FleetMap from "../components/FleetMap";
import VehicleChart from "../components/VehicleChart";
import TripChart from "../components/TripChart";

function Dashboard() {
  const { vehicles, drivers, trips, maintenance } = useFleet();

  // Vehicle Stats
  const totalVehicles = vehicles.length;

  const availableVehicles = vehicles.filter(
    (v) => v.status === "Available"
  ).length;

  const onTripVehicles = vehicles.filter(
    (v) => v.status === "On Trip"
  ).length;

  // Maintenance Stats
  const pendingMaintenance = maintenance.filter(
    (m) => m.status === "Pending"
  ).length;

  const completedMaintenance = maintenance.filter(
    (m) => m.status === "Completed"
  ).length;

  const overdueMaintenance = maintenance.filter(
    (m) => m.status === "Overdue"
  ).length;

  // Driver Stats
  const totalDrivers = drivers.length;

  const availableDrivers = drivers.filter(
    (d) => d.status === "Available"
  ).length;

  const assignedDrivers = drivers.filter(
    (d) => d.status === "Assigned"
  ).length;

  // Trip Stats
  const activeTrips = trips.filter(
    (t) => t.status === "In Progress"
  ).length;

  const completedTrips = trips.filter(
    (t) => t.status === "Completed"
  ).length;

  return (
    <DashboardLayout>
      <div>

        <h1 className="text-3xl font-bold mb-6">
          Dashboard
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <StatCard
            title="Total Vehicles"
            value={totalVehicles}
          />

          <StatCard
            title="Available Vehicles"
            value={availableVehicles}
          />

          <StatCard
            title="Vehicles On Trip"
            value={onTripVehicles}
          />

          <StatCard
            title="Pending Maintenance"
            value={pendingMaintenance}
          />

          <StatCard
            title="Drivers"
            value={totalDrivers}
          />

          <StatCard
            title="Available Drivers"
            value={availableDrivers}
          />

          <StatCard
            title="Assigned Drivers"
            value={assignedDrivers}
          />

          <StatCard
            title="Active Trips"
            value={activeTrips}
          />

        </div>

        <div className="mt-8 bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-4">
            Fleet Status
          </h2>

          <div className="space-y-3">

            <p>🟢 Available Vehicles : {availableVehicles}</p>

            <p>🔵 Vehicles On Trip : {onTripVehicles}</p>

            <p>🟡 Pending Maintenance : {pendingMaintenance}</p>

            <p>✅ Completed Maintenance : {completedMaintenance}</p>

            <p>🔴 Overdue Maintenance : {overdueMaintenance}</p>

            <p>👨 Available Drivers : {availableDrivers}</p>

            <p>🚚 Active Trips : {activeTrips}</p>

            <p>✔️ Completed Trips : {completedTrips}</p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <VehicleChart />

          <TripChart />

        </div>

        <FleetMap />

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;