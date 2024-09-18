import { Link } from "react-router-dom";

export function Heading() {
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
         </div>
      </>
   );
}