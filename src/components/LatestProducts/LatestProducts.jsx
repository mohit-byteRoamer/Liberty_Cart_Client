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
   }, [dispatch]);

   if (getLatestProductLoader)
      return (
         <div className="h-screen w-full flex items-center justify-center">
            <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
         </div>
      );

   return (
      <section className="px-5 py-16">
         {/* 1st section */}
         <SectionTopBar text="This Month" />
         {/* 2nd section */}
         <div className="flex items-center justify-between py-5 w-full">
            {/* Title and Timer */}
            <div className="flex items-end">
               <h1 className="text-3xl font-bold">Latest Products</h1>
            </div>
            {/* View Button */}
            <div className="view-btn w-[10%]">
               <ViewBtn text="View All" className="flex items-center justify-center w-full h-12" />
            </div>
         </div>
         {/* 3rd section */}
         <div>
            <ProductSlider latestProduct={latestProduct} />
         </div>
         <div className="w-full py-10">
            <img className="w-full" src={JBL} alt="JBL Bomber" />
         </div>
      </section>
   );
}

export default LatestProducts;
