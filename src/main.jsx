import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <div className="container mx-auto">
         <App />
         <Toaster />
      </div>
   </BrowserRouter>
);