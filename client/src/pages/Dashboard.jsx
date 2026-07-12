import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import DashboardCharts from "../components/DashboardCharts";
import RecentTrips from "../components/RecentTrips";
import MaintenanceAlerts from "../components/MaintenanceAlerts";
import { FaTruck, FaUsers, FaRoute, FaTools } from "react-icons/fa";

function Dashboard() {
  return (
    <DashboardLayout>
      <div>

        <h1 className="text-3xl font-bold mb-6">
          Dashboard
        </h1>

        {/* KPI Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <StatCard
  title="Vehicles"
  value="24"
  color="#3B82F6"
  icon={<FaTruck />}
/>

<StatCard
  title="Drivers"
  value="18"
  color="#10B981"
  icon={<FaUsers />}
/>

<StatCard
  title="Active Trips"
  value="9"
  color="#F59E0B"
  icon={<FaRoute />}
/>

<StatCard
  title="Maintenance"
  value="3"
  color="#EF4444"
  icon={<FaTools />}
/>

        </div>
        <DashboardCharts />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
    <RecentTrips />
    <MaintenanceAlerts />
</div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;