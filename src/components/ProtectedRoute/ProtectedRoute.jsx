// ProtectedRoute.js
import { Navigate } from "react-router-dom";

// Assuming you have a way to check if the user is authenticated
const ProtectedRoute = ({ Component }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Replace with your authentication logic

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
