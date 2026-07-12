import { FaEdit, FaTrash } from "react-icons/fa";
import API from "../api/vehicleApi";

function VehicleTable({
  vehicles,
  setVehicles,
  search,
  statusFilter,
  setEditingVehicle,
}) {
  // Filter vehicles
  const filtered = vehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.registration
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      vehicle.name?.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      vehicle.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Delete Vehicle
  const deleteVehicle = async (id) => {
    if (!window.confirm("Are you sure you want to delete this vehicle?"))
      return;

    try {
      await API.delete(`/vehicles/${id}`);

      const res = await API.get("/vehicles");
      setVehicles(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to delete vehicle");
    }
  };

  // Status Badge
  const badgeColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700";
      case "On Trip":
        return "bg-blue-100 text-blue-700";
      case "Maintenance":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Registration</th>
            <th>Name</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.length > 0 ? (
            filtered.map((vehicle) => (
              <tr
                key={vehicle.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-3">{vehicle.registration}</td>
                <td>{vehicle.name}</td>
                <td>{vehicle.type}</td>
                <td>{vehicle.capacity}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColor(
                      vehicle.status
                    )}`}
                  >
                    {vehicle.status}
                  </span>
                </td>

                <td>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setEditingVehicle(vehicle)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => deleteVehicle(vehicle.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center p-6 text-gray-500"
              >
                No vehicles found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default VehicleTable;