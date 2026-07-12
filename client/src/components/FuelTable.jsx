import { FaTrash } from "react-icons/fa";

function FuelTable({ fuelLogs, setFuelLogs }) {
  const deleteFuelLog = (id) => {
    if (window.confirm("Delete this fuel log?")) {
      setFuelLogs(fuelLogs.filter((log) => log.id !== id));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden mt-6">
      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Vehicle</th>
            <th>Driver</th>
            <th>Fuel Type</th>
            <th>Liters</th>
            <th>Cost</th>
            <th>Odometer</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {fuelLogs.length > 0 ? (

            fuelLogs.map((log) => (

              <tr
                key={log.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-3">{log.vehicle}</td>

                <td>{log.driver}</td>

                <td>{log.fuelType}</td>

                <td>{log.liters} L</td>

                <td>₹ {log.cost}</td>

                <td>{log.odometer} km</td>

                <td>{log.date}</td>

                <td>

                  <button
                    onClick={() => deleteFuelLog(log.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>

                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="8"
                className="text-center p-6 text-gray-500"
              >
                No fuel logs available.
              </td>

            </tr>

          )}

        </tbody>

      </table>
    </div>
  );
}

export default FuelTable;