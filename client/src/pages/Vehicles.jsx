import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import VehicleTable from "../components/VehicleTable";
import VehicleForm from "../components/VehicleForm";
import { useFleet } from "../context/FleetContext";
function Vehicles() {
  const { vehicles, setVehicles } = useFleet();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [editingVehicle, setEditingVehicle] = useState(null);

  return (
    <DashboardLayout>
      <div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Vehicles
          </h1>

          <VehicleForm
  vehicles={vehicles}
  setVehicles={setVehicles}
  editingVehicle={editingVehicle}
  setEditingVehicle={setEditingVehicle}
/>
        </div>

        <div className="flex gap-4 mb-6">

          <input
            type="text"
            placeholder="Search vehicle..."
            className="border rounded-lg p-2 w-72"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border rounded-lg p-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All</option>
            <option>Available</option>
            <option>On Trip</option>
            <option>Maintenance</option>
          </select>

        </div>

        <VehicleTable
  vehicles={vehicles}
  setVehicles={setVehicles}
  search={search}
  statusFilter={statusFilter}
  setEditingVehicle={setEditingVehicle}
/>

      </div>
    </DashboardLayout>
  );
}

export default Vehicles;