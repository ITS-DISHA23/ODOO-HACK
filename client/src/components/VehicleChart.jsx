import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";
import { useFleet } from "../context/FleetContext";

ChartJS.register(ArcElement, Tooltip, Legend);

function VehicleChart() {
  const { vehicles } = useFleet();

  const available = vehicles.filter(
    (v) => v.status === "Available"
  ).length;

  const onTrip = vehicles.filter(
    (v) => v.status === "On Trip"
  ).length;

  const maintenance = vehicles.filter(
    (v) => v.status === "Maintenance"
  ).length;

  const data = {
    labels: ["Available", "On Trip", "Maintenance"],
    datasets: [
      {
        data: [available, onTrip, maintenance],
        backgroundColor: [
          "#22c55e",
          "#3b82f6",
          "#ef4444",
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-bold mb-4">
        Vehicle Status
      </h2>

      <Pie data={data} />
    </div>
  );
}

export default VehicleChart;