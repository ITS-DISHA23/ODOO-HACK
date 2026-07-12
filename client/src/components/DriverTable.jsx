import { FaEdit, FaTrash } from "react-icons/fa";

function DriverTable({
  drivers,
  setDrivers,
  search,
  statusFilter,
  setEditingDriver,
}) {
  // Filter drivers
  const filtered = drivers.filter((driver) => {
    const matchesSearch =
      driver.name.toLowerCase().includes(search.toLowerCase()) ||
      driver.license.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      driver.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Delete Driver
  const deleteDriver = (id) => {
    if (window.confirm("Are you sure you want to delete this driver?")) {
      setDrivers(drivers.filter((d) => d.id !== id));
    }
  };

  // Status Badge Color
  const badgeColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700";

      case "Assigned":
        return "bg-blue-100 text-blue-700";

      case "Off Duty":
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
            <th className="p-3 text-left">Driver Name</th>
            <th>License No</th>
            <th>Phone</th>
            <th>Experience</th>
            <th>Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.length > 0 ? (
            filtered.map((driver) => (
              <tr
                key={driver.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-3 font-medium">
                  {driver.name}
                </td>

                <td>{driver.license}</td>

                <td>{driver.phone}</td>

                <td>{driver.experience} yrs</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColor(
                      driver.status
                    )}`}
                  >
                    {driver.status}
                  </span>
                </td>

                <td>
                  <div className="flex justify-center gap-4">

                    <button
                      onClick={() => setEditingDriver(driver)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit Driver"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => deleteDriver(driver.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete Driver"
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
                No drivers found.
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}

export default DriverTable;