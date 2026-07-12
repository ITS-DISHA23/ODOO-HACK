import {
  FaHome,
  FaTruck,
  FaUsers,
  FaRoute,
  FaTools,
  FaGasPump,
  FaChartBar,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Sidebar() {

  const { user } = useAuth();


  const menuItems = [

    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome />,
      roles: [
        "Fleet Manager",
        "Dispatcher",
        "Safety Officer",
        "Financial Analyst",
      ],
    },


    {
      name: "Vehicles",
      path: "/vehicles",
      icon: <FaTruck />,
      roles: [
        "Fleet Manager",
      ],
    },


    {
      name: "Drivers",
      path: "/drivers",
      icon: <FaUsers />,
      roles: [
        "Safety Officer",
        "Fleet Manager",
      ],
    },


    {
      name: "Trips",
      path: "/trips",
      icon: <FaRoute />,
      roles: [
        "Dispatcher",
        "Fleet Manager",
      ],
    },


    {
      name: "Maintenance",
      path: "/maintenance",
      icon: <FaTools />,
      roles: [
        "Fleet Manager",
      ],
    },


    {
      name: "Fuel Logs",
      path: "/fuel",
      icon: <FaGasPump />,
      roles: [
        "Financial Analyst",
        "Fleet Manager",
      ],
    },


    {
      name: "Reports",
      path: "/reports",
      icon: <FaChartBar />,
      roles: [
        "Financial Analyst",
        "Fleet Manager",
      ],
    },

  ];


  const allowedItems = menuItems.filter(
    (item) =>
      user &&
      item.roles.includes(user.role)
  );


  return (

    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">

      <h1 className="text-2xl font-bold mb-8">
        TransitOps
      </h1>


      <nav className="space-y-3">

        {allowedItems.map((item)=>(

          <NavLink
            key={item.name}
            to={item.path}
            className={({isActive}) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg
              ${
                isActive
                ? "bg-blue-600"
                : "hover:bg-gray-800"
              }`
            }
          >

            {item.icon}

            <span>
              {item.name}
            </span>

          </NavLink>

        ))}


      </nav>

    </div>

  );
}


export default Sidebar;