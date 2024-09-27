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
import About from "./page/About";
import ProductDetail from "./components/ExploreOurProduct/ProductDetail";
import Contact from "./page/Contact";

function App() {
   const location = useLocation();
   // Define paths where the footer should not appear
   const hideFooterPaths = ["/login", "/signup"];
   const currentPath = location.pathname.replace(/\/$/, "");
   return (
      <>
         {hideFooterPaths.includes(currentPath) ? null : <Heading />}
         <AppHeader className="" />
         <div className="container mx-auto">
            <Routes>
               {/* Public Routes */}
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/login" element={<Login />} />

               {/* Protected Routes */}
               <Route path="/" element={<Protected Component={Home} />} />
               <Route path="/addProduct" element={<Protected Component={AddProduct} />} />
               <Route path="/product/:id" element={<Protected Component={ProductDetail} />} />
               {/* Error Route */}
               <Route path="*" element={<Error />} />
            </Routes>
         </div>
         {/* Conditionally render footer */}
         {hideFooterPaths.includes(currentPath) ? null : <AppFooter />}
      </>
   );
}

export default App;
