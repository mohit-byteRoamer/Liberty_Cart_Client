import SectionTopBar from "../SectionTopBar";
import ProductSlider from "../ProductSlider/ProductSlider";
import ViewBtn from "../Buttons/ViewBtn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductLoad } from "../../redux/action/product_action";

function ExploreOurProduct() {
   const productReducerState = useSelector((state) => state.ProductReducer);
   const { products, getProductLoader } = productReducerState;

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProductLoad());
   }, [dispatch]);

   if (getProductLoader)
      return (
         <div className="h-screen w-full flex items-center justify-center">
            <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
            {/* <Spin className="p-36 bg-['rgba(0, 0, 0, 0.05)'] " tip="Loading" size="large"></Spin> */}
         </div>
      );

   return (
      <section className="">
         {/* 1st section */}
         <SectionTopBar text="Our Products" />
         {/* 2nd section */}
         <div className="flex flex-col gap-y-10 w-full">
            <div>
               <ProductSlider title="Explore Our Products" data={products?.data?.Products} />
            </div>
            <div className="flex justify-center">
               <ViewBtn text="View All Products" />
            </div>
         </div>
      </section>
   );
}

export default ExploreOurProduct;
