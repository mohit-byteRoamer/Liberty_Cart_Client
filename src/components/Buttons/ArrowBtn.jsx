import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

export function LeftArrowBtn({onClick, disabled}) {
   return (
      <button onClick={onClick} disabled={disabled} className="flex items-center justify-center w-12 h-12 bg-gray-200 text-black rounded-full transform transition-transform duration-300 ease-out hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white animate-pulse">
         <ArrowLeftOutlined />
      </button>
   );
}

export function RightArrowBtn({onClick, disabled}) {
   return (
      <button onClick={onClick} disabled={disabled} className="flex items-center justify-center w-12 h-12 bg-gray-200 text-black rounded-full transform transition-transform duration-300 ease-out hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white animate-pulse">
         <ArrowRightOutlined />
      </button>
   );
}
