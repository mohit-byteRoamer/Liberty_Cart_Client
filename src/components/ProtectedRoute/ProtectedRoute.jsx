// ProtectedRoute.js
import { Navigate } from "react-router-dom";

// Assuming you have a way to check if the user is authenticated
const ProtectedRoute = ({ Component }) => {
   const isAuthenticated = localStorage.getItem("token"); // Replace with your authentication logic
   if (isAuthenticated) {
      return <Component />;
   } else {
      return <Navigate to="/login" />;
   }
};

export default ProtectedRoute;
