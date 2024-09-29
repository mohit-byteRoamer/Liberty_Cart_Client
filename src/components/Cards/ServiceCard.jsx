import { Card } from "antd";

const ServiceCard = ({ icon, heading, description }) => {
   return (
      <div className="flex justify-center items-center w-full">
         <Card className="flex flex-col items-center p-6 shadow-lg w-96">
            <div className="flex items-center justify-center w-full">
               <div>
                  <div className="flex justify-center items-center border-2 bg-gray-100 w-20 rounded-full p-4">
                     {icon}
                  </div>
               </div>
            </div>
            <h3 className="mt-4 text-center text-lg font-bold">{heading}</h3>
            <p className="text-gray-500 text-center text-sm">{description}</p>
         </Card>
      </div>
   );
};

export default ServiceCard;
