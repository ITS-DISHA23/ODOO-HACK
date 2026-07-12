import { FaBell, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Navbar() {

  const { user, logout } = useAuth();

  const navigate = useNavigate();


  const handleLogout = () => {

    logout();

    navigate("/login");

  };


  return (

    <div className="h-16 bg-white shadow flex items-center justify-between px-6">


      {/* Project Title */}

      <h1 className="text-xl font-bold text-blue-600">
        TransitOps
      </h1>



      {/* Right Side */}

      <div className="flex items-center gap-6">


        {/* Search */}

        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2 w-64"
        />



        {/* Notification */}

        <button className="text-gray-600 text-xl">

          <FaBell />

        </button>




        {/* User */}

        {user && (

          <div className="flex items-center gap-3">


            <FaUserCircle
              className="text-3xl text-gray-500"
            />


            <div className="text-sm">

              <p className="font-semibold">
                {user.email}
              </p>


              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">

                {user.role}

              </span>

            </div>



            <button

              onClick={handleLogout}

              className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"

            >

              Logout

            </button>


          </div>

        )}



      </div>


    </div>

  );
}


export default Navbar;