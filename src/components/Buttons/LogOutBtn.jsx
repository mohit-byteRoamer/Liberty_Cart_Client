import { Button } from "antd";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function LogOutBtn() {
   const navigate = useNavigate();
   const loginToken = localStorage.getItem("token");

   const handleLogout = () => {
      if (loginToken) {
         localStorage.removeItem("token");
         navigate("/login");
      } else {
         toast.error("User is not logged in");
      }
   };
   return (
      <Button type="primary" onClick={handleLogout}>
         Log Out
      </Button>
   );
}

export default LogOutBtn;
