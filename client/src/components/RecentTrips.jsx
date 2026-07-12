function RecentTrips() {

  const trips = [
    {
      id: "TR001",
      vehicle: "MH12AB1234",
      driver: "Rahul",
      status: "On Trip",
    },
    {
      id: "TR002",
      vehicle: "MH12AB5678",
      driver: "Priya",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="font-semibold mb-4">
        Recent Trips
      </h2>

      <table className="w-full">

        <thead>
          <tr className="text-left border-b">
            <th>ID</th>
            <th>Vehicle</th>
            <th>Driver</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {trips.map((trip) => (
            <tr key={trip.id} className="border-b">
              <td>{trip.id}</td>
              <td>{trip.vehicle}</td>
              <td>{trip.driver}</td>
              <td>{trip.status}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default RecentTrips;