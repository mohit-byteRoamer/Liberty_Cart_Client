/* eslint-disable react/prop-types */
import { Button } from "antd/es/radio";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ViewBtn({ type, className }) {
   // const dispatch = useDispatch()
   const navigate = useNavigate();
   const handleNavigate = () => {
      navigate("/all-products");
   };
   return (
      <Button
         onClick={handleNavigate}
         type={type}
         className={`flex items-center justify-center bg-red-500 text-white hover:text-white font-bold h-16 w-[18%] ${className}`}>
         View All Products
      </Button>
   );
}

export default ViewBtn;
