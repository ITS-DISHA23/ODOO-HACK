import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-8">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          🚛 TransitOps Dashboard
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Search Box */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notification */}
        <button className="relative text-2xl text-gray-600 hover:text-blue-600">
          <FaBell />

          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-blue-600" />

          <div>
            <h2 className="font-semibold">
              Admin
            </h2>

            <p className="text-xs text-gray-500">
              Fleet Manager
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;