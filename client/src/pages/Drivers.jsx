import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import DriverForm from "../components/DriverForm";
import DriverTable from "../components/DriverTable";

function Drivers() {
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

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [editingDriver, setEditingDriver] = useState(null);

  return (
    <DashboardLayout>
      <div>

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            Drivers
          </h1>

          <DriverForm
            drivers={drivers}
            setDrivers={setDrivers}
            editingDriver={editingDriver}
            setEditingDriver={setEditingDriver}
          />

        </div>

        <div className="flex gap-4 mb-6">

          <input
            type="text"
            placeholder="Search Driver..."
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
            <option>Assigned</option>
            <option>Off Duty</option>
          </select>

        </div>

        <DriverTable
          drivers={drivers}
          setDrivers={setDrivers}
          search={search}
          statusFilter={statusFilter}
          setEditingDriver={setEditingDriver}
        />

      </div>
    </DashboardLayout>
  );
}

export default Drivers;