import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useFleet } from "../context/FleetContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function TripChart() {
  const { trips } = useFleet();

  const data = {
    labels: [
      "Active",
      "Completed",
    ],
    datasets: [
      {
        label: "Trips",
        data: [
          trips.filter(
            (t) => t.status === "In Progress"
          ).length,

          trips.filter(
            (t) => t.status === "Completed"
          ).length,
        ],
        backgroundColor: [
          "#3b82f6",
          "#22c55e",
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-bold mb-4">
        Trip Analytics
      </h2>

      <Bar data={data} />
    </div>
  );
}

export default TripChart;