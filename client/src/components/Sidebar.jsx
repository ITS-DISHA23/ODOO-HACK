import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaTruck,
  FaUsers,
  FaRoute,
  FaTools,
  FaGasPump,
  FaChartBar,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: <FaTachometerAlt />,
  },
  {
    name: "Vehicles",
    path: "/vehicles",
    icon: <FaTruck />,
  },
  {
    name: "Drivers",
    path: "/drivers",
    icon: <FaUsers />,
  },
  {
    name: "Trips",
    path: "/trips",
    icon: <FaRoute />,
  },
  {
    name: "Maintenance",
    path: "/maintenance",
    icon: <FaTools />,
  },
  {
    name: "Fuel Logs",
    path: "/fuel",
    icon: <FaGasPump />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <FaChartBar />,
  },
];

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 shadow-lg">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">
          🚛 TransitOps
        </h1>
        <p className="text-sm text-slate-400">
          Smart Transport ERP
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-3 mx-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;