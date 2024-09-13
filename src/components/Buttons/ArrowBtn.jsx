import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

export function ArrowBtn() {
   return (
      <div className="flex gap-x-5">
         <button className="flex items-center justify-center w-12 h-12 bg-gray-200 text-black rounded-full transform transition-transform duration-300 ease-out hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white animate-pulse">
            <ArrowLeftOutlined />
         </button>
         <button className="flex items-center justify-center w-12 h-12 bg-gray-200 text-black rounded-full transform transition-transform duration-300 ease-out hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white animate-pulse">
            <ArrowRightOutlined />
         </button>
      </div>
   );
}
