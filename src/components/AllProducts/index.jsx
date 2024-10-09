/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductLoad } from "../../redux/action/product_action";
import Page from "../Pagination";
import ProductCard from "../Cards/ProductCard";
import CategoryTags from "../CategoryTags";

function AllProducts() {
   const dispatch = useDispatch();
   const productReducerState = useSelector((state) => state?.ProductReducer);
   const { products, getProductLoader } = productReducerState;

   const [pageNumber, setPageNumber] = useState(1);
   const totalPage = products?.totalPage || 0;

   useEffect(() => {
      dispatch(getProductLoad(pageNumber));
   }, [pageNumber]);

   if (getProductLoader)
      return (
         <div className="h-screen w-full flex items-center justify-center">
            <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
         </div>
      );

   return (
      <section>
         <div className="container mx-auto ">
            {/* Tabs & Product Card */}
            <div className="">
               {/* Tabs */}
               <div className="p-2 flex justify-center border-b-2">
                  <CategoryTags />
               </div>
               {/* Product Card */}
               <div className="productCard grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-5">
                  {products?.Products?.map((product, index) => (
                     <div key={index}>
                        <ProductCard product={product} />
                     </div>
                  ))}
               </div>
            </div>
            {/* Pagination */}
            <div className="pagination mt-8 text-2xl flex justify-center items-center p-1">
               <Page
                  totalPage={totalPage} // totalPage should be multiplied by items per page (assuming 10 items per page)
                  currentPage={pageNumber}
                  onChange={(page) => setPageNumber(page)}
               />
            </div>
         </div>
      </section>
   );
}

export default AllProducts;
