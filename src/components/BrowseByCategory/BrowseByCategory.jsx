import SectionTopBar from "../SectionTopBar";
import { ArrowBtn } from "../Buttons/ArrowBtn";
import CategoryCard from "./CategoryCard";
import { CameraOutlined, MobileOutlined } from "@ant-design/icons";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { ImHeadphones } from "react-icons/im";
import { TbDeviceGamepad } from "react-icons/tb";
import { Link } from "react-router-dom";

function BrowseByCategory() {
   return (
      <section className="px-5 py-16">
         {/* 1st section */}
         <SectionTopBar text="Categories" />
         {/* 2nd section */}
         <div className="flex flex-col gap-y-10">
            <div className="flex items-center justify-between py-5">
               {/* Title and Timer */}
               <div className="flex gap-x-14 items-end">
                  <h1 className="text-3xl font-bold">Browse By Category</h1>
               </div>
               {/* Arrow Button */}
               <div>
                  <ArrowBtn />
               </div>
            </div>
            {/* 3rd section */}
            <div className="flex justify-between px-5">
               <Link to={"/phones"}>
                  <CategoryCard icon={<MobileOutlined />} title={"Phones"} />
               </Link>
               <Link to={"/computers"}>
                  <CategoryCard icon={<RiComputerLine />} title={"Computers"} />
               </Link>
               <Link to={"/smartwatch"}>
                  <CategoryCard icon={<BsSmartwatch />} title={"SmartWatch"} />
               </Link>
               <Link to={"/cameras"}>
                  <CategoryCard icon={<CameraOutlined />} title={"Cameras"} />
               </Link>
               <Link to={"/headphones"}>
                  <CategoryCard icon={<ImHeadphones />} title={"Headphones"} />
               </Link>
               <Link to={"/gaming"}>
                  <CategoryCard icon={<TbDeviceGamepad />} title={"Gaming"} />
               </Link>
            </div>
         </div>
      </section>
   );
}

export default BrowseByCategory;
