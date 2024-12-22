import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Heading } from "./components/appHeader/Heading";
import Home from "./page/HomePage";
import Error from "./page/ErrorPage";
import Signup from "./page/SignupPage";
import Login from "./page/LogInPage";
import AppHeader from "./components/appHeader/AppHeader"
import AppFooter from "./components/appFooter/AppFooter";
import About from "./page/About";
import ProductDetail from "./components/exploreOurProduct/ProductDetail";
import Contact from "./page/Contact";
import UnProtectedRoute from "./components/routes/UnProtectedRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import EditProduct from "./adminPanel/editProduct";
import AllProducts from "./components/allProducts";
import ReviewOrder from "./components/order/reviewOrder";
import ShoppingCart from "./components/shoppingCart";
import PaymentInfo from "./page/PaymentInfo";
import MyProduct from "./adminPanel/myProduct";

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
               <Route path="/product/:id" element={<ProtectedRoute Component={ProductDetail} />} />
               <Route path="/myProduct" element={<ProtectedRoute Component={MyProduct} />} />
               <Route
                  path="/edit-product/:id"
                  element={<ProtectedRoute Component={EditProduct} />}
               />
               <Route path="/all-products" element={<ProtectedRoute Component={AllProducts} />} />
               <Route path="/shoppingCart" element={<ProtectedRoute Component={ShoppingCart} />} />
               <Route path="/reviewOrder" element={<ProtectedRoute Component={ReviewOrder} />} />
               <Route path="/paymentInfo" element={<ProtectedRoute Component={PaymentInfo} />} />

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
