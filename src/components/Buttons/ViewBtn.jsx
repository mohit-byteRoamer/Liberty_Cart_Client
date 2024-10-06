/* eslint-disable react/prop-types */
import { Button } from "antd/es/radio";
import { Link } from "react-router-dom";

function ViewBtn({ type, text, className, icon }) {
   return (
      <Button
         type={type}
         className={`flex items-center justify-center bg-red-500 text-white hover:text-white font-bold h-16 w-[18%] ${className}`}>
         <div className="flex gap-2">
            <Link to={"/all-product"}>
               {icon && <span>{icon}</span>}
               {text}
            </Link>
         </div>
      </Button>
   );
}

export default ViewBtn;
