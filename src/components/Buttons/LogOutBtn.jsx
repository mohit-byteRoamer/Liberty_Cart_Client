import { Button } from "antd";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

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
      <Button className="w-full p-4" type="primary" onClick={handleLogout}>
         <div className="flex items-center gap-1">
            <MdOutlineLogout />
            Logout
         </div>
      </Button>
   );
}

export default LogOutBtn;
