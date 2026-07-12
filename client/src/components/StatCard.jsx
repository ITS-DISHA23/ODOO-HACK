function StatCard({ title, value, color, icon }) {
  return (
    <div
      className="bg-white rounded-xl shadow p-6 border-l-4 flex justify-between items-center"
      style={{ borderColor: color }}
    >
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <h1 className="text-3xl font-bold mt-2">{value}</h1>
      </div>

      <div className="text-4xl" style={{ color }}>
        {icon}
      </div>
    </div>
  );
}

export default StatCard;