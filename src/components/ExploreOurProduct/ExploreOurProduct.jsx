import SectionTopBar from "../SectionTopBar";
import ProductSlider from "../ProductSlider/ProductSlider";
import ViewBtn from "../Buttons/ViewBtn";
// import OurProducts from "./OurProducts";
import { ArrowBtn } from "../Buttons/ArrowBtn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductLoad } from "../../redux/action/product_action";

function ExploreOurProduct() {
   const productReducerState = useSelector((state) => state.ProductReducer);
   const { products, getProductLoader } = productReducerState;
   console.log("PRODUCTS", productReducerState);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProductLoad());
   }, [dispatch]);

   if (getProductLoader)
      return (
         <div className="h-screen w-full flex items-center justify-center">
            <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
         </div>
      );

   return (
      <section className="px-5 py-16">
         {/* 1st section */}
         <SectionTopBar text="Our Products" />
         {/* 2nd section */}
         <div className="flex items-center justify-between py-5 w-full">
            {/* Title and Timer */}
            <div className="flex items-end">
               <h1 className="text-3xl font-bold">Explore Our Product</h1>
            </div>
            {/* View Button */}
            <div className="view-btn w-[10%]">
               <ArrowBtn />
            </div>
         </div>
         {/* 3rd section */}
         <div><ProductSlider OurProducts={products?.data?.Products} /></div>
         <div className="flex justify-center">
            <ViewBtn text="View All Products" className="h-16 w-[18%]" />
         </div>
      </section>
   );
}

export default ExploreOurProduct;
