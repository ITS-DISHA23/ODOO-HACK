import { useFleet } from "../context/FleetContext";

function ReportSummary() {
  const { vehicles, trips, fuelLogs } = useFleet();

  // Total Fuel Cost
  const totalFuelCost = fuelLogs.reduce(
    (sum, log) => sum + Number(log.cost || 0),
    0
  );

  // Total Fuel Consumed
  const totalFuel = fuelLogs.reduce(
    (sum, log) => sum + Number(log.liters || 0),
    0
  );

  // Total Distance
  const totalDistance = trips.reduce(
    (sum, trip) => sum + Number(trip.distance || 0),
    0
  );

  // Fuel Efficiency
  const fuelEfficiency =
    totalFuel > 0
      ? (totalDistance / totalFuel).toFixed(2)
      : "0";

  // Fleet Utilization
  const onTrip = vehicles.filter(
    (v) => v.status === "On Trip"
  ).length;

  const fleetUtilization =
    vehicles.length > 0
      ? ((onTrip / vehicles.length) * 100).toFixed(1)
      : "0";

  // Maintenance Cost (Demo)
  const maintenanceCost = 15000;

  // Operational Cost
  const operationalCost =
    totalFuelCost + maintenanceCost;

  // Revenue (Trips)
  const revenue = trips.reduce(
    (sum, trip) => sum + Number(trip.revenue || 0),
    0
  );

  // Acquisition Cost (Demo)
  const acquisitionCost = 800000;

  // ROI
  const roi =
    (
      ((revenue - operationalCost) /
        acquisitionCost) *
      100
    ).toFixed(2);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">
          Fuel Efficiency
        </h3>

        <p className="text-3xl font-bold text-green-600">
          {fuelEfficiency} km/L
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">
          Fleet Utilization
        </h3>

        <p className="text-3xl font-bold text-blue-600">
          {fleetUtilization}%
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">
          Operational Cost
        </h3>

        <p className="text-3xl font-bold text-red-600">
          ₹ {operationalCost}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">
          Vehicle ROI
        </h3>

        <p className="text-3xl font-bold text-purple-600">
          {roi}%
        </p>
      </div>

    </div>
  );
}

export default ReportSummary;