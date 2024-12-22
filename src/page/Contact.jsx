import { Card } from "antd";
import { IoCallOutline } from "react-icons/io5";

function Contact() {
   return (
      <div>
         <div className="flex justify-center items-center w-full h-[84vh]">
            <div className="flex flex-col gap-5 border-2 rounded-xl p-5 shadow-lg w-96 h-[50%]">
               <div className="flex gap-2 items-center text-base font-bold">
                  <span className="rounded-full bg-red-400 text-white p-3">
                     <IoCallOutline />
                  </span>
                  <h1>Call To US</h1>
               </div>
               <div className="text-base font-medium">
                  <p>We are available 24/7, 7 days a week.</p>
               </div>
               <div className="text-base font-semibold">
                  <p>Phone: +880 123 456 789</p>
               </div>
            </div>

            <Card className="border-2 border-blue-400 flex flex-col items-center p-6 shadow-lg w-96"></Card>
         </div>
      </div>
   );
}

export default Contact;
