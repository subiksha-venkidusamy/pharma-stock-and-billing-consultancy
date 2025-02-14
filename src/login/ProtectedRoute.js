import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./firebaseConfig";

const ProtectedRoute = ({ children }) => {
  return auth.currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
