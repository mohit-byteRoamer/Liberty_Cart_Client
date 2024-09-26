import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogOutBtn from "../Buttons/LogOutBtn";
import { Popover } from "antd";



export function Heading() {
   const [isDarkMode, setIsDarkMode] = useState(false);

   useEffect(() => {
      if (isDarkMode) {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   }, [isDarkMode]);

   const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
   };

   const content = (
      <div>
         <LogOutBtn/>
      </div>
   );

   return (
      <>
         {/* Heading Sta rt */}
         <div className="bg-black w-full text-white text-sm py-1">
            <div className="flex items-center justify-between px-2">
               {/* DARK MODE BUTTON */}
               <div>
                  <button
                     onClick={toggleDarkMode}
                     className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-4 py-2 rounded">
                     {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </button>
               </div>
               {/* TEXT SECTION */}
               <div>
                  <h1 className="text-center">
                     Summer Sale For All Suits And Free Express Delivery - OFF 50%!{" "}
                     <Link to={"/shop_now"}>
                        <span className="font-bold underline cursor-pointer hover:text-blue-400">
                           ShopNow!
                        </span>
                     </Link>
                  </h1>
               </div>
               {/* IMAGE SECTION */}
               <Popover
                  className="popover w-[3%] rounded-full overflow-hidden"
                  content={content}>
                  <img
                     className="w-full h-full"
                     src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1727265106~exp=1727265706~hmac=2b48b806a6a6340dc45204ff038df0765e3e1cdc1a49613b2f694be2d2a70add"
                     alt=""
                  />
               </Popover>
            </div>
         </div>
      </>
   );
}
