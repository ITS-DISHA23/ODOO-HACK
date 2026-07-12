import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Vehicles from "../pages/Vehicles";
import Drivers from "../pages/Drivers";
import Trips from "../pages/Trips";
import Maintenance from "../pages/Maintenance";
import FuelLogs from "../pages/FuelLogs";
import Reports from "../pages/Reports";
import Login from "../pages/Login";

import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../context/AuthContext";


function AppRoutes() {

  const { user } = useAuth();


  return (

    <Routes>


      {/* Login */}

      <Route
        path="/login"
        element={
          user 
          ? <Navigate to="/" replace />
          : <Login />
        }
      />



      {/* Dashboard - Everyone */}

      <Route
        path="/"
        element={
          <ProtectedRoute
            allowedRoles={[
              "Fleet Manager",
              "Dispatcher",
              "Safety Officer",
              "Financial Analyst"
            ]}
          >
            <Dashboard />
          </ProtectedRoute>
        }
      />



      {/* Vehicles */}

      <Route
        path="/vehicles"
        element={
          <ProtectedRoute
            allowedRoles={[
              "Fleet Manager"
            ]}
          >
            <Vehicles />
          </ProtectedRoute>
        }
      />



      {/* Drivers */}

      <Route
        path="/drivers"
        element={
          <ProtectedRoute
            allowedRoles={[
              "Fleet Manager",
              "Safety Officer"
            ]}
          >
            <Drivers />
          </ProtectedRoute>
        }
      />



      {/* Trips */}

      <Route
        path="/trips"
        element={
          <ProtectedRoute
            allowedRoles={[
              "Fleet Manager",
              "Dispatcher"
            ]}
          >
            <Trips />
          </ProtectedRoute>
        }
      />



      {/* Maintenance */}

      <Route
        path="/maintenance"
        element={
          <ProtectedRoute
            allowedRoles={[
              "Fleet Manager"
            ]}
          >
            <Maintenance />
          </ProtectedRoute>
        }
      />



      {/* Fuel Logs */}

      <Route
        path="/fuel"
        element={
          <ProtectedRoute
            allowedRoles={[
              "Fleet Manager",
              "Financial Analyst"
            ]}
          >
            <FuelLogs />
          </ProtectedRoute>
        }
      />



      {/* Reports */}

      <Route
        path="/reports"
        element={
          <ProtectedRoute
            allowedRoles={[
              "Fleet Manager",
              "Financial Analyst"
            ]}
          >
            <Reports />
          </ProtectedRoute>
        }
      />



      {/* Invalid URL */}

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />


    </Routes>

  );
}


export default AppRoutes;