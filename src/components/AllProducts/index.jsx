/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductCategoryLoad, getProductLoad } from "../../redux/action/product_action";
import Page from "../Pagination";
import ProductCard from "../Cards/ProductCard";
import CategoryTags from "../CategoryTags";

function AllProducts() {
   const dispatch = useDispatch();
   const productReducerState = useSelector((state) => state?.ProductReducer);
   const { products, getProductLoader, productCategory } = productReducerState;
   const [pageNumber, setPageNumber] = useState(1);
   const totalPage = products?.totalPage || 0; // Get total page from API

   const [selectedCategories, setSelectedCategories] = useState([]); // State to store selected categories

   useEffect(() => {
      dispatch(getProductCategoryLoad());
   }, []);

   useEffect(() => {
      dispatch(getProductLoad({ pageNumber, categories: selectedCategories }));
   }, [pageNumber, selectedCategories]);

   const handleCategoryChange = (categories) => {
      setSelectedCategories(categories); // update state based on selected categories
      setPageNumber(1); // reset page number to 1 when categories change
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
