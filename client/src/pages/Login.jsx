import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("Fleet Manager");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    login(email, role);

    navigate("/");
  };

  return (
    <div className="min-h-screen grid grid-cols-2">

      {/* Left */}

      <div className="bg-gray-100 flex flex-col justify-center px-20">

        <h1 className="text-5xl font-bold text-blue-700">
          TransitOps
        </h1>

        <p className="text-gray-600 mt-2">
          Smart Transport Operations Platform
        </p>

        <div className="mt-16">

          <h2 className="text-xl font-semibold mb-4">
            One Login, Four Roles
          </h2>

          <ul className="space-y-3 text-lg">

            <li>🚚 Fleet Manager</li>

            <li>📍 Dispatcher</li>

            <li>🦺 Safety Officer</li>

            <li>📈 Financial Analyst</li>

          </ul>

        </div>

      </div>

      {/* Right */}

      <div className="flex justify-center items-center bg-gray-900">

        <div className="bg-white rounded-xl shadow-xl w-[420px] p-8">

          <h2 className="text-3xl font-bold mb-6">
            Sign In
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg w-full mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            className="border p-3 rounded-lg w-full mb-6"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Fleet Manager</option>
            <option>Dispatcher</option>
            <option>Safety Officer</option>
            <option>Financial Analyst</option>
          </select>

          <button
            onClick={handleLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded-lg"
          >
            Sign In
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;