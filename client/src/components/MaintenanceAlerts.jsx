function MaintenanceAlerts() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="font-semibold mb-4">
        Maintenance Alerts
      </h2>

      <div className="space-y-3">

        <div className="bg-red-50 p-3 rounded">
          🚛 MH12AB1234 requires servicing
        </div>

        <div className="bg-yellow-50 p-3 rounded">
          🚚 MH14XY5678 oil change due
        </div>

      </div>

    </div>
  );
}

export default MaintenanceAlerts;