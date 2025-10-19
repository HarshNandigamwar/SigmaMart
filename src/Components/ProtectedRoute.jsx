import React from "react";
import { FaSpinner } from "react-icons/fa6";
import { Navigate, Outlet } from "react-router-dom";
// importing from context
import { useAuth } from "../Context/AuthProvider";

const ProtectedRoute = () => {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return <div className="text-center p-10 animate-spin"><FaSpinner/> </div>;
  }
  if (currentUser) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
