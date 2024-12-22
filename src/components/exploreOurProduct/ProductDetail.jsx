import { useEffect } from "react";
import { getProductDetailLoad } from "../../redux/action/product_action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Card, List, Rate } from "antd";

const ProductDetail = () => {
   const productDetailData = useSelector((state) => state.ProductReducer);
   const { getProductDetailLoader, productsDetail } = productDetailData;

   const { id } = useParams();

   const dispatch = useDispatch();

   useEffect(() => {
      // Fetch product details by ID
      dispatch(getProductDetailLoad(id));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [id]);

   if (getProductDetailLoader)
      return (
         <div className="h-screen w-full flex items-center justify-center">
            <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
         </div>
      );

   if (
      !productsDetail ||
      !productsDetail.category ||
      !productsDetail.name ||
      !productsDetail.price ||
      !productsDetail.stock ||
      !productsDetail._id ||
      !productsDetail.createdAt ||
      !productsDetail.photo ||
      !productsDetail.updatedAt
   ) {
      return (
         <div className="container flex items-center justify-center mx-auto">
            <img
               src="https://thumbs.dreamstime.com/b/no-data-illustration-vector-concept-websites-landing-pages-mobile-applications-posters-banners-209459339.jpg"
               alt="Product details are currently unavailable. Please try again later."
               className="w-[45%] h-[45%]"
            />
            <p></p>;
         </div>
      );
   }

   return (
      <div className="font-sans bg-white p-4 lg:max-w-7xl max-w-4xl mx-auto dark:bg-gray-900 dark:text-white">
         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
            {/* Left Side: Big Product Image */}
            <div className="lg:col-span-3 text-center">
               <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                  <img
                     src={productsDetail.photo || "https://community.ebay.com/t5/image/serverpage/image-id/852125i802CE825350658CB?v=v2"} // Default image if none exists
                     alt={productsDetail.name}
                     className="w-3/4 rounded object-cover mx-auto"
                  />
               </div>
            </div>

            {/* Right Side: Product Details */}
            <div className="lg:col-span-2">
               <h2 className="text-2xl font-extrabold text-gray-800">{productsDetail.name}</h2>

               <div className="flex space-x-2 mt-4">
                  <Rate disabled allowHalf defaultValue={productsDetail.rating || 4.0} />
                  <h4 className="text-gray-800 text-base">{productsDetail.reviews || 0} Reviews</h4>
               </div>

               <div className="flex flex-wrap gap-4 mt-8">
                  <p className="text-gray-800 text-3xl font-bold">${productsDetail.price}</p>
                  {productsDetail.oldPrice && (
                     <p className="text-gray-400 text-base">
                        <strike>${productsDetail.oldPrice}</strike>
                        <span className="text-sm ml-1">Tax included</span>
                     </p>
                  )}
               </div>

               <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800">Category</h3>
                  <p className="text-gray-600">{productsDetail.category}</p>
               </div>

               <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800">Stock Availability</h3>
                  <p className={`text-lg ${productsDetail.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                     {productsDetail.stock > 0 ? "In Stock" : "Out of Stock"}
                  </p>
               </div>

               <div className="flex flex-wrap gap-4 mt-8">
                  <Button type="primary" className="min-w-[200px]">Buy now</Button>
                  <Button type="default" className="min-w-[200px]">Add to cart</Button>
               </div>
            </div>
         </div>

         {/* Additional Product Info */}
         <Card className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6" title="Product Information">
            <List className="mt-4 space-y-6 text-gray-800">
               <List.Item>
                  Product ID: <span className="ml-4 float-right">{productsDetail._id}</span>
               </List.Item>
               <List.Item>
                  Created At: <span className="ml-4 float-right">{new Date(productsDetail.createdAt).toLocaleDateString()}</span>
               </List.Item>
               <List.Item>
                  Updated At: <span className="ml-4 float-right">{new Date(productsDetail.updatedAt).toLocaleDateString()}</span>
               </List.Item>
            </List>
         </Card>
      </div>
   );
};

export default ProductDetail;
