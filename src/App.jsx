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
import About from "./page/About";
import ProductDetail from "./components/ExploreOurProduct/ProductDetail";
import Contact from "./page/Contact";
import UnProtectedRoute from "./components/Routes/UnProtectedRoute";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import MyProduct from "./AdminPanel/MyProduct/MyProduct";
import AddProduct from "./AdminPanel/AddProduct/AddProduct";

function App() {
   const location = useLocation();
   const token = localStorage.getItem("token");
   // Define paths where the footer should not appear
   const hideFooterPaths = ["/login", "/signup"];
   const currentPath = location.pathname.replace(/\/$/, "");
   return (
      <>
         {/* Conditionally render heading */}
         {token && !hideFooterPaths.includes(currentPath) ? <Heading /> : null}
         <AppHeader className="" />
         <div className="container mx-auto">
            <Routes>
               {/* Public Routes */}
               <Route path="/login" element={<UnProtectedRoute Component={Login} />} />
               <Route path="/signup" element={<UnProtectedRoute Component={Signup} />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />

               {/* Protected Routes */}
               <Route path="/" element={<ProtectedRoute Component={Home} />} />
               <Route path="/addProduct" element={<ProtectedRoute Component={AddProduct} />} />
               <Route path="/product/:id" element={<ProtectedRoute Component={ProductDetail} />} />
               <Route path="/myProduct" element={<ProtectedRoute Component={MyProduct} />} />
               <Route path="/myProduct/edit-product/:id" element={<ProtectedRoute Component={MyProduct} />} />
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
