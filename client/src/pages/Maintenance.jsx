import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import MaintenanceTable from "../components/MaintenanceTable";
import MaintenanceForm from "../components/MaintenanceForm";
import { useFleet } from "../context/FleetContext";

import {
  FaTools,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";

function Maintenance() {
  // Get maintenance data from FleetContext
  const { maintenance, setMaintenance } = useFleet();

  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div className="flex justify-between items-center">

          <h1 className="text-3xl font-bold">
            Maintenance Management
          </h1>

          <button
            onClick={() => {
              setEditingItem(null);
              setOpen(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            + Schedule Maintenance
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <StatCard
            title="Pending"
            value={maintenance.filter((m) => m.status === "Pending").length}
            icon={<FaClock />}
          />

          <StatCard
            title="Completed"
            value={maintenance.filter((m) => m.status === "Completed").length}
            icon={<FaCheckCircle />}
          />

          <StatCard
            title="Overdue"
            value={maintenance.filter((m) => m.status === "Overdue").length}
            icon={<FaExclamationTriangle />}
          />

          <StatCard
            title="Total Services"
            value={maintenance.length}
            icon={<FaTools />}
          />

        </div>

        <MaintenanceTable
          maintenance={maintenance}
          setMaintenance={setMaintenance}
          setEditingItem={setEditingItem}
          setOpen={setOpen}
        />

        <MaintenanceForm
          open={open}
          onClose={() => setOpen(false)}
          maintenance={maintenance}
          setMaintenance={setMaintenance}
          editingItem={editingItem}
        />

      </div>
    </DashboardLayout>
  );
}

export default Maintenance;