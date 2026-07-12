import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function ProtectedRoute({ 
  children,
  allowedRoles
}) {

  const { user } = useAuth();


  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }


  // Role not allowed
  if (
    allowedRoles &&
    !allowedRoles.includes(user.role)
  ) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <div className="bg-white shadow-lg rounded-xl p-8 text-center">

          <h1 className="text-3xl font-bold text-red-600">
            Access Denied
          </h1>

          <p className="mt-3 text-gray-600">
            You don't have permission to access this page.
          </p>

        </div>

      </div>

    );

  }


  return children;

}


export default ProtectedRoute;