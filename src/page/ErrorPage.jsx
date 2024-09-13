import { Link } from "react-router-dom";
import ViewBtn from "../components/Buttons/ViewBtn";

function Error() {
   return (
      <div className="h-96 flex flex-col justify-center items-center gap-y-10 bg-gray-100">
         <h1 className="text-7xl font-bold mb-4 text-red-600">404 - Page Not Found</h1>
         <p className="text-lg mb-6">Your visited page not found. You may go home page</p>
         <Link to="/">
            <ViewBtn text="Back to home page" className="flex items-center px-10 h-16 w-full" />
         </Link>
      </div>
   );
}

export default Error;
