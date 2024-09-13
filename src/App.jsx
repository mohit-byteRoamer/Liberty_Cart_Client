import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/HomePage";
import Error from "./page/ErrorPage";
import Signup from "./page/SignupPage";
import Login from "./page/LogInPage";
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";

function App() {
   return (
      <>
      <AppHeader/>
         <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
         </Routes>
         <AppFooter/>
      </>
   );
}

export default App;
