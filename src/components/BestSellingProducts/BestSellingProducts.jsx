import SectionTopBar from "../SectionTopBar";
import ProductSlider from "../ProductSlider/ProductSlider";
import ViewBtn from "../Buttons/ViewBtn";
import BestSellingProductsData from "./BestSellingProductsData";
import JBL from "../../assets/JBL.png"

function BestSellingProducts() {
   return (
      <section className="px-5 py-16">
         {/* 1st section */}
         <SectionTopBar text="This Month" />
         {/* 2nd section */}
         <div className="flex items-center justify-between py-5 w-full">
            {/* Title and Timer */}
            <div className="flex items-end">
               <h1 className="text-3xl font-bold">Best Selling Products</h1>
            </div>
            {/* View Button */}
            <div className="view-btn w-[10%]">
               <ViewBtn text="View All" className="flex items-center justify-center w-full h-12" />
            </div>
         </div>
         {/* 3rd section */}
         <div>
            <ProductSlider BestSellingProductsData={BestSellingProductsData} />
         </div>
         <div className="w-full py-10"><img className="w-full" src={JBL} alt="JBL Bomber" /></div>
      </section>
   );
}

export default BestSellingProducts;
