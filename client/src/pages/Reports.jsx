import DashboardLayout from "../layouts/DashboardLayout";
import ReportSummary from "../components/ReportSummary";
import ReportCharts from "../components/ReportCharts";
import { useFleet } from "../context/FleetContext";

function Reports() {

  const { vehicles, drivers, trips, fuelLogs } =
    useFleet();

  const exportCSV = () => {

    const rows = [
      [
        "Vehicle",
        "Driver",
        "Distance",
        "Fuel(L)",
        "Fuel Cost",
      ],
    ];

    fuelLogs.forEach((log) => {
      rows.push([
        log.vehicle,
        log.driver,
        "",
        log.liters,
        log.cost,
      ]);
    });

    const csv = rows
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "fleet_report.csv";

    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <DashboardLayout>

      <div>

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold">
            Reports & Analytics
          </h1>

          <div className="flex gap-3">

            <button
              onClick={exportCSV}
              className="bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              Export CSV
            </button>

            <button
              onClick={() => window.print()}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Print
            </button>

          </div>

        </div>

        <ReportSummary />

        <ReportCharts />

      </div>

    </DashboardLayout>
  );
}

export default Reports;