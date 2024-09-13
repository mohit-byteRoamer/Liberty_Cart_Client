/* eslint-disable react/prop-types */
import { Button } from "antd/es/radio";

function ViewBtn({ type, text, className, icon }) {
   return (
      <Button
         type={type}
         className={`flex items-center justify-center bg-red-500 text-white hover:text-white font-bold ${className}`}>
         <div className="flex gap-2">
            {icon && <span>{icon}</span>}
            {text}
         </div>
      </Button>
   );
}

export default ViewBtn;
