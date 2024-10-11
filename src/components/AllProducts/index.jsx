/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductCategoryLoad, getProductLoad } from "../../redux/action/product_action";
import Page from "../Pagination";
import ProductCard from "../Cards/ProductCard";
import CategoryTags from "../CategoryTags";

function AllProducts() {
   const dispatch = useDispatch();
   // Extract state using object destructuring for cleaner code
   const { products, getProductLoader, productCategory } = useSelector(
      (state) => state?.ProductReducer
   );

   const [pageNumber, setPageNumber] = useState(1);
   const [apiPayload, setApiPayload] = useState({ pageNumber: 1, category: "" });

   useEffect(() => {
      dispatch(getProductCategoryLoad());
   }, []);

   useEffect(() => {
      dispatch(getProductLoad(apiPayload));
   }, [apiPayload]);

   const handleCategoryChange = (categories) => {
      setApiPayload({ category: categories, pageNumber: 1 });
   };

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
                  <CategoryTags
                     category={productCategory}
                     onCategoryChange={handleCategoryChange}
                     selectedCategory={apiPayload.category}
                  />
               </div>
               {/* Product Card */}
               <div className="productCard grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-5">
                  {products?.Products?.map((product) => (
                     <div key={product.id}>
                        <ProductCard product={product} />
                     </div>
                  ))}
               </div>
            </div>
            {/* Pagination */}
            <div className="pagination mt-8 text-2xl flex justify-center items-center p-1">
               <Page
                  totalPage={products?.totalPage || 0}
                  currentPage={pageNumber}
                  onChange={(page) => setPageNumber(page)}
               />
            </div>
         </div>
      </section>
   );
}

export default AllProducts;
