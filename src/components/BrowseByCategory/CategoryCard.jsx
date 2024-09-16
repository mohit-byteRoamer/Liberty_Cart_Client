/* eslint-disable react/prop-types */
import { Card } from "antd";

const { Meta } = Card;

const CategoryCard = ({ icon, title }) => {
   return (
      <div>
         {/* First Card */}
         <Card
            bordered={true}
            hoverable
            className="flex justify-center items-center w-44 h-44 border-gray-400 hover:bg-red-400 transform hover:scale-110 transition-all duration-500 ease-out">
            <div className="flex gap-3 flex-col items-center justify-center">
               {/* Centering the Mobile icon and text properly */}
               <span className="text-5xl">{icon}</span>
               <Meta title={title} />
            </div>
         </Card>
      </div>
   );
};

export default CategoryCard;
