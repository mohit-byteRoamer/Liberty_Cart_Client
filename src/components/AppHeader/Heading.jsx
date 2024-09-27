import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogOutBtn from "../Buttons/LogOutBtn";
import { Popover } from "antd";
import { useSelector } from "react-redux";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export function Heading() {
   const navigate = useNavigate();
   const [isDarkMode, setIsDarkMode] = useState(false);
   const logInUser = useSelector((state) => state?.AuthReducer?.user?.data?.user);

   // Add a check if logInUser is undefined or null
   const avatar = logInUser?.avatar;
   const fullName = logInUser?.fullName;
   const email = logInUser?.email;
   const userName = logInUser?.userName;

   console.log("LOGIN_ACTION :", useSelector((state) => state));
   console.log("AVATAR :", avatar);
   console.log("fullName :", fullName);
   console.log("email :", email);
   console.log("userName :", userName);

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

   const title = (
      <div className="flex items-center gap-2 p-1">
         <div>
            {avatar ? (
               <img className="w-10 h-10 rounded-full object-cover" src={avatar} alt="Avatar" />
            ) : (
               <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1727265106~exp=1727265706~hmac=2b48b806a6a6340dc45204ff038df0765e3e1cdc1a49613b2f694be2d2a70add"
                  alt="Avatar"
               />
            )}
         </div>
         <div>
            <h1 className="text-base font-semibold">{fullName}</h1>
            <h1 className="text-base font-semibold">{email}</h1>
         </div>
      </div>
   );

   const content = (
      <div className="flex flex-col p-1">
         <Link
            className="border-b-2 text-xl font-semibold hover:bg-slate-100 cursor-pointer p-1 rounded-md"
            to={"/profile"}>
            {title}
         </Link>
         <div className="flex flex-col border-b-2">
            <Link
               className="p-2 text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md"
               to={"/profile"}>
               Profile
            </Link>
            <Link
               className="p-2 text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md"
               to={"/order"}>
               Order
            </Link>
         </div>
         <div className="flex flex-col border-b-2">
            <Link
               to={"/suggestion"}
               className="p-2 text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md">
               Suggestion
            </Link>
            <Link
               to={"/help"}
               className="p-2 text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md">
               help
            </Link>
         </div>
         <div className="pt-3">
            <LogOutBtn />
         </div>
      </div>
   );

   return (
      <>
         <div className="bg-black w-full text-white text-sm py-1">
            <div className="flex items-center justify-between px-2">
               <div>
                  <button
                     onClick={toggleDarkMode}
                     className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-4 py-2 rounded">
                     {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </button>
               </div>
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
               {logInUser ? (
                  <Popover
                     trigger="click"
                     className="popover rounded-full overflow-hidden flex items-center gap-2 cursor-pointer"
                     content={content}>
                     <div>
                        {avatar ? (
                           <img className="w-10 h-10 rounded-full object-cover" src={avatar} alt="Avatar" />
                        ) : (
                           <img
                              className="w-10 h-10 rounded-full object-cover"
                              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1727265106~exp=1727265706~hmac=2b48b806a6a6340dc45204ff038df0765e3e1cdc1a49613b2f694be2d2a70add"
                              alt="Avatar"
                           />
                        )}
                     </div>
                     <div>
                        <h1 className="text-base font-semibold">{fullName}</h1>
                     </div>
                     <div>
                        <FaAngleDown />
                     </div>
                  </Popover>
               ) : (
                  navigate("/login")
               )}
            </div>
         </div>
      </>
   );
}
