import VehicleChart from "./VehicleChart";
import TripChart from "./TripChart";

function ReportCharts() {
  return (

    <div className="grid md:grid-cols-2 gap-6">

      <VehicleChart />

      <TripChart />

    </div>

  );
}

export default ReportCharts;