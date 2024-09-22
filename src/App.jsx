import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/HomePage";
import Error from "./page/ErrorPage";
import Signup from "./page/SignupPage";
import Login from "./page/LogInPage";
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";
import { useLocation } from "react-router-dom";
import { Heading } from "./components/AppHeader/Heading";
import AddProduct from "./page/AddProductForm";
import Protected from "./components/ProtectedRoute/ProtectedRoute";
function App() {
   const location = useLocation();
   // Define paths where the footer should not appear
   const hideFooterPaths = ["/login", "/signup"];
   return (
      <>
         {hideFooterPaths.includes(location.pathname) ? null : <Heading />}
         <AppHeader />
         <Routes>
            {/* Public Routes */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route path="/" element={<Protected Component={Home} />} />
            <Route path="/addProduct" element={<Protected Component={AddProduct} />} />

            {/* Error Route */}
            <Route path="*" element={<Error />} />
         </Routes>
         {/* Conditionally render footer */}
         {hideFooterPaths.includes(location.pathname) ? null : <AppFooter />}
      </>
   );
}

export default App;
