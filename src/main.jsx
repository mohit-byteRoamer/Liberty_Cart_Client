import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
   <Provider store={store}>
      <div className="dark:bg-gray-900 dark:text-white">
         <BrowserRouter>
            <App />
            <Toaster position="top-right" reverseOrder={false} />
         </BrowserRouter>
      </div>
   </Provider>
);
