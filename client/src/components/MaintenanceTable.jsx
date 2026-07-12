import { FaEdit, FaTrash } from "react-icons/fa";

function MaintenanceTable({
  maintenance,
  setMaintenance,
  setEditingItem,
  setOpen,
}) {
  const handleDelete = (id) => {
    if (window.confirm("Delete this maintenance record?")) {
      setMaintenance(maintenance.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="px-5 py-3 text-left">Vehicle</th>
              <th className="px-5 py-3 text-left">Service</th>
              <th className="px-5 py-3 text-left">Mechanic</th>
              <th className="px-5 py-3 text-left">Due Date</th>
              <th className="px-5 py-3 text-left">Status</th>
              <th className="px-5 py-3 text-left">Cost</th>
              <th className="px-5 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {maintenance.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-5 py-4">{item.vehicle}</td>

                <td>{item.service}</td>

                <td>{item.mechanic}</td>

                <td>{item.dueDate}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td>₹{item.cost}</td>

                <td className="text-center">

                  <button
                    className="text-blue-500 hover:text-blue-700 mr-4"
                    onClick={() => {
                      setEditingItem(item);
                      setOpen(true);
                    }}
                  >
                    <FaEdit />
                  </button>

                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FaTrash />
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default MaintenanceTable;