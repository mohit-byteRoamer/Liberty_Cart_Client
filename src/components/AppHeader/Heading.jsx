import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
   return (
      <>
         {/* Heading Start */}
         <div className="flex items-center justify-center bg-black text-white relative text-sm h-12">
            <h1 className="text-center">
               Summer Sale For All Suits And Free Express Delivery - OFF 50%!{" "}
               <Link to={"/shop_now"}>
                  <span className="font-bold underline cursor-pointer hover:text-blue-400">
                     ShopNow!
                  </span>
               </Link>
            </h1>
            <button
               onClick={toggleDarkMode}
               className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-4 py-2 rounded absolute right-2">
               {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
         </div>
      </>
   );
}