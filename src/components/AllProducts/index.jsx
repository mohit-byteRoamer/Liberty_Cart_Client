/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductLoad } from "../../redux/action/product_action";
import Page from "../Pagination";
import ProductCard from "../Cards/ProductCard";

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
         <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {products?.Products?.map((product, index) => (
                  <div key={index}>
                     <ProductCard product={product} />
                  </div>
               ))}
            </div>
            <div className="mt-8">
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
