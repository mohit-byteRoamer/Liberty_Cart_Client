/* eslint-disable react/prop-types */
import { useState } from "react";
import { LeftArrowBtn, RightArrowBtn } from "../Buttons/ArrowBtn";
import ProductCard from "../Cards/ProductCard";

const ProductSlider = ({ data, title }) => {
   //  Initial Value of CurrentIndex
   const [startIndex, setStartIndex] = useState(0);
   const itemsPerPage = 4;
   const endIndex = startIndex + itemsPerPage;
   const isPrevDisabled = startIndex === 0;
   const isNextDisabled = endIndex >= data?.length;

   //  PREVIOUS BUTTON
   const handlePrev = () => {
      if (!isPrevDisabled) {
         setStartIndex(startIndex - itemsPerPage);
      }
   };

   //  NEXT BUTTON
   const handleNext = () => {
      if (!isNextDisabled) {
         setStartIndex(startIndex + itemsPerPage);
      }
   };

   return (
      <div className="flex flex-col gap-y-10">
         {/* title & Button */}
         <div className="flex justify-between mt-4">
            <div>
               <h1 className="text-3xl font-bold">{title}</h1>
            </div>
            {/* Previous & Next Buttons */}
            <div className="buttons flex gap-5 view-btn w-[10%]">
               <LeftArrowBtn onClick={handlePrev} disabled={isPrevDisabled} />
               <RightArrowBtn onClick={handleNext} disabled={isNextDisabled} />
            </div>
         </div>

         {/* Slider */}
         <div className="flex justify-between">
            {data?.slice(startIndex, endIndex).map((product, index) => (
               <div key={index}>
                  <ProductCard product={product} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default ProductSlider;
