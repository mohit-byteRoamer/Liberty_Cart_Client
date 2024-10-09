/* eslint-disable react-hooks/exhaustive-deps */
import SectionTopBar from "../SectionTopBar";
import CategoryCard from "../Cards/CategoryCard";
import { LeftArrowBtn, RightArrowBtn } from "../Buttons/ArrowBtn";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductCategoryLoad } from "../../redux/action/product_action";
import { AccountBookOutlined, AudioOutlined, HomeOutlined } from "@ant-design/icons";
import { SiStmicroelectronics, SiFacebookgaming } from "react-icons/si";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { MdCameraOutdoor } from "react-icons/md";
import { TbToolsKitchen3 } from "react-icons/tb";
import { HiHomeModern } from "react-icons/hi2";
import { AiFillGolden } from "react-icons/ai";
import { IoIosFitness } from "react-icons/io";
import { GiClothes } from "react-icons/gi";
import { IoIosMan } from "react-icons/io";
import { IoWoman } from "react-icons/io5";

function BrowseByCategory() {
   const dispatch = useDispatch();
   const categoryProduct = useSelector((state) => state?.ProductReducer?.productCategory);

   useEffect(() => {
      dispatch(getProductCategoryLoad());
   }, []);

   // Dynamic function to return icon based on category
   const getCategoryIcon = (category) => {
      switch (category.toLowerCase()) {
         case "accessories":
            return <AccountBookOutlined />;
         case "electronics":
            return <SiStmicroelectronics />;
         case "audio":
            return <AudioOutlined />;
         case "fitness":
            return <IoIosFitness />;
         case "gaming":
            return <SiFacebookgaming />;
         case "home decor":
            return <HomeOutlined />;
         case "kitchen":
            return <TbToolsKitchen3 />;
         case "office supplies":
            return <PiBuildingOfficeLight />;
         case "outdoor":
            return <MdCameraOutdoor />;
         case "smart home":
            return <HiHomeModern />;
         case "wearables":
            return <GiClothes />;
         case "jewellery":
            return <AiFillGolden />;
         case "men clothing":
            return <IoIosMan />;
         case "women clothing":
            return <IoWoman />;
         default:
            return; // Default icon if no match is found
      }
   };

   // Set state to track the current index of the categories
   const [startIndex, setStartIndex] = useState(0);
   const itemsPerPage = 5;

   // Calculate the end index for slicing
   const endIndex = startIndex + itemsPerPage;

   const isPrevDisabled = startIndex === 0;
   const isNextDisabled = endIndex >= categoryProduct.length;

   const handleNext = () => {
      if (!isNextDisabled) {
         setStartIndex(startIndex + itemsPerPage);
      }
   };

   const handlePrev = () => {
      if (!isPrevDisabled) {
         setStartIndex(startIndex - itemsPerPage);
      }
   };

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
               <div className="flex gap-5">
                  <LeftArrowBtn onClick={handlePrev} disabled={isPrevDisabled} />
                  <RightArrowBtn onClick={handleNext} disabled={isNextDisabled} />
               </div>
            </div>
            {/* 3rd section */}
            <div className="flex justify-center gap-9 w-full max-w-8xl">
               {categoryProduct?.slice(startIndex, endIndex).map((item, index) => (
                  <Link key={index} to={`/products/${item}`}>
                     <CategoryCard
                        key={index}
                        icon={getCategoryIcon(item)} // Dynamically set icon based on category
                        title={item}
                     />
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
}

export default BrowseByCategory;
