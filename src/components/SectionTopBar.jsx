// eslint-disable-next-line react/prop-types
function SectionTopBar({ text }) {
   return (
      <div className="flex gap-x-3 h-10">
         <div className="w-[1.5%] bg-red-500 rounded-sm"></div>
         <div className="flex items-center font-bold text-red-500">{text}</div>
      </div>
   );
}

export default SectionTopBar;
