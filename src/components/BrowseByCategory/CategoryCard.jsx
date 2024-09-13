import { Card } from "antd";
import { CameraOutlined, MobileOutlined } from "@ant-design/icons";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { ImHeadphones } from "react-icons/im";
import { TbDeviceGamepad } from "react-icons/tb";

const { Meta } = Card;

const CategoryCard = () => {
   return (
      <div className="flex justify-between px-5">
         {/* First Card */}
         <Card
            bordered={true}
            hoverable
            className="flex justify-center items-center w-44 h-44 border-gray-400 hover:bg-red-400 transform hover:scale-110 transition-all duration-500 ease-out">
            <div className="flex gap-3 flex-col items-center justify-center">
               {/* Centering the Mobile icon and text properly */}
               <MobileOutlined className="text-5xl" />
               <Meta title="Phones" />
            </div>
         </Card>
         {/* Second Card */}
         <Card
            bordered={true}
            hoverable
            className="flex justify-center items-center w-44 h-44 border-gray-400 hover:bg-red-400 transform hover:scale-110 transition-all duration-500 ease-out">
            <div className="flex gap-3 flex-col items-center justify-center">
               {/* Centering the Mobile icon and text properly */}
               <RiComputerLine className="text-5xl" />
               <Meta title="Computers" />
            </div>
         </Card>
         {/* Third Card */}
         <Card
            bordered={true}
            hoverable
            className="flex justify-center items-center w-44 h-44 border-gray-400 hover:bg-red-400 transform hover:scale-110 transition-all duration-500 ease-out">
            <div className="flex gap-3 flex-col items-center justify-center">
               {/* Centering the Mobile icon and text properly */}
               <BsSmartwatch className="text-5xl" />
               <Meta title="SmartWatch" />
            </div>
         </Card>
         {/* Fourth Card */}
         <Card
            bordered={true}
            hoverable
            className="flex justify-center items-center w-44 h-44 border-gray-400 hover:bg-red-400 transform hover:scale-110 transition-all duration-500 ease-out">
            <div className="flex gap-3 flex-col items-center justify-center">
               {/* Centering the Mobile icon and text properly */}
               <CameraOutlined className="text-5xl" />
               <Meta title="Cameras" />
            </div>
         </Card>
         {/* Fifth Card */}
         <Card
            bordered={true}
            hoverable
            className="flex justify-center items-center w-44 h-44 border-gray-400 hover:bg-red-400 transform hover:scale-110 transition-all duration-500 ease-out">
            <div className="flex gap-3 flex-col items-center justify-center">
               {/* Centering the Mobile icon and text properly */}
               <ImHeadphones style={{ fontSize: "48px" }} />
               <Meta title="HeadPhones" />
            </div>
         </Card>
         {/* Sixth Card */}
         <Card
            bordered={true}
            hoverable
            className="flex justify-center items-center w-44 h-44 border-gray-400 hover:bg-red-400 transform hover:scale-110 transition-all duration-500 ease-out">
            <div className="flex gap-3 flex-col items-center justify-center">
               {/* Centering the Mobile icon and text properly */}
               <TbDeviceGamepad className="text-5xl" />
               <Meta title="Gaming" />
            </div>
         </Card>
      </div>
   );
};

export default CategoryCard;
