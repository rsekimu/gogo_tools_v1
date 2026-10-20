import { Navigate, Outlet } from "react-router-dom";

function RouteProtector({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default RouteProtector;
