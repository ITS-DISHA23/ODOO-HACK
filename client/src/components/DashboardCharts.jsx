import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function DashboardCharts() {
  const pieData = {
    labels: ["Available", "On Trip", "Maintenance"],
    datasets: [
      {
        data: [18, 9, 3],
        backgroundColor: [
          "#22C55E",
          "#3B82F6",
          "#EF4444",
        ],
      },
    ],
  };

  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Trips",
        data: [4, 6, 8, 5, 7, 9],
        backgroundColor: "#3B82F6",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold mb-4">
          Vehicle Status
        </h2>

        <Pie data={pieData} />
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold mb-4">
          Weekly Trips
        </h2>

        <Bar data={barData} />
      </div>

    </div>
  );
}

export default DashboardCharts;