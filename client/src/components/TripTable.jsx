function TripTable({
  trips,
  setTrips,
  vehicles,
  setVehicles,
  drivers,
  setDrivers,
}) {

  const finishTrip = (trip) => {

    // Mark trip completed
    setTrips(
      trips.map((t) =>
        t.id === trip.id
          ? { ...t, status: "Completed" }
          : t
      )
    );

    // Vehicle Available
    setVehicles(
      vehicles.map((v) =>
        v.registration === trip.vehicle
          ? { ...v, status: "Available" }
          : v
      )
    );

    // Driver Available
    setDrivers(
      drivers.map((d) =>
        d.name === trip.driver
          ? { ...d, status: "Available" }
          : d
      )
    );
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Vehicle</th>
            <th>Driver</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {trips.map((trip) => (

            <tr key={trip.id} className="border-t">

              <td className="p-3">{trip.vehicle}</td>

              <td>{trip.driver}</td>

              <td>{trip.source}</td>

              <td>{trip.destination}</td>

              <td>{trip.date}</td>

              <td>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    trip.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {trip.status}
                </span>

              </td>

              <td>

                {trip.status === "In Progress" && (

                  <button
                    onClick={() => finishTrip(trip)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Finish
                  </button>

                )}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TripTable;
