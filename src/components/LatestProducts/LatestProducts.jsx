import SectionTopBar from "../SectionTopBar";
import ProductSlider from "../ProductSlider/ProductSlider";
import ViewBtn from "../Buttons/ViewBtn";
import JBL from "../../assets/JBL.png";
import { getLatestProductLoad } from "../../redux/action/product_action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function LatestProducts() {
   const latestProductState = useSelector((state) => state.ProductReducer);

   const { latestProduct, getLatestProductLoader } = latestProductState;

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getLatestProductLoad());
   }, []);

   if (getLatestProductLoader)
      return (
         <div className="h-screen w-full flex items-center justify-center">
            <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
         </div>
      );

   return (
      <section className="px-5 py-16">
         {/* 1st section */}
         <div>
            <SectionTopBar text="This Month" />
         </div>
         {/* 2nd section */}
         <div className="flex flex-col gap-y-10 w-full">
            {/* Title & Slider */}
            <div className="Slider">
               <ProductSlider title={"Latest Products"} latestProduct={latestProduct} />
            </div>
            {/* View Button */}
            <div className="flex justify-center">
               <ViewBtn text="View All Products" />
            </div>
         </div>
         {/* 3rd section */}
         <div></div>
         <div className="w-full py-10">
            <img className="w-full" src={JBL} alt="JBL Bomber" />
         </div>
      </section>
   );
}

export default LatestProducts;
