import SectionTopBar from "../SectionTopBar";
import Timer from "../Timer";
import { LeftArrowBtn, RightArrowBtn } from "../Buttons/ArrowBtn";
import ProductSlider from "../ProductSlider/ProductSlider";
import ViewBtn from "../Buttons/ViewBtn";
import flashSalesProduct from "./flashSalesProduct";

function FlashSales() {
   return (
      <section className="px-5 py-16">
         {/* 1st section */}
         <SectionTopBar text="Today's" />
         {/* 2nd section */}
         <div className="flex items-center justify-between py-5">
            {/* Title and Timer */}
            <div className="flex gap-x-14 items-end">
               <h1 className="text-3xl font-bold">Flash Sales</h1>
               <div>
                  <Timer />
               </div>
            </div>
            {/* Arrow Button */}
            <div className="flex gap-5">
               <LeftArrowBtn />
               <RightArrowBtn />
            </div>
         </div>
         {/* 3rd section */}
         <div>
            <ProductSlider flashSalesProduct={flashSalesProduct}  />
         </div>
         <div className="flex justify-center">
            <ViewBtn text="View All Products" className="h-16 w-[18%]" />
         </div>
      </section>
   );
}

export default FlashSales;
