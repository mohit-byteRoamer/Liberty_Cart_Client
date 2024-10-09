/* eslint-disable react-hooks/exhaustive-deps */
// src/ProductTable.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { getProductDetailLoad, updateProductLoad } from "../../redux/action/product_action";
import { Button, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "../../page/Image";

const EditProduct = () => {
   const { id } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const {
      handleSubmit,
      control,
      formState: { errors },
      reset,
   } = useForm({ defaultValues: { price: 0 } });

   const productsReducerStates = useSelector((state) => state?.ProductReducer);

   useEffect(() => {
      // Fetch product details by ID
      dispatch(getProductDetailLoad(id));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [id]);

   useEffect(() => {
      if (productsReducerStates.productsDetail) {
         reset({
            name: productsReducerStates.productsDetail.name,
            category: productsReducerStates.productsDetail.category,
            price: productsReducerStates.productsDetail.price,
            description: productsReducerStates.productsDetail.description,
            stock: productsReducerStates.productsDetail.stock,
         });
      }
   }, [productsReducerStates.productsDetail, reset]);

   if (productsReducerStates.getProductDetailLoader) {
      return (
         <div className="container flex items-center justify-center mx-auto">
            <div className="h-screen w-full flex items-center justify-center">
               <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
            </div>
         </div>
      );
   }

   // Handle Submit function
   const onUpdateSubmit = (data) => {
      // Handle form submission
      const updateData = {
         ...data,
         id: productsReducerStates.productsDetail._id,
      };
      // Updated data dispatched
      dispatch(updateProductLoad({ updateData, navigate }));
   };

   return (
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md my-5 dark:bg-gray-900 dark:text-white">
         <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
         {productsReducerStates.productsDetail && (
            <form onSubmit={handleSubmit(onUpdateSubmit)}>
               {/* Name Field */}
               <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300">Name</label>
                  <Controller
                     name="name"
                     control={control}
                     rules={{ required: "Name is required" }}
                     render={({ field }) => <Input {...field} />}
                  />
                  {errors.name && <span className="text-red-500">{errors.name.message}</span>}
               </div>

               {/* Category Field */}
               <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300">Category</label>
                  <Controller
                     name="category"
                     control={control}
                     rules={{ required: "Category is required" }}
                     render={({ field }) => (
                        <Select
                           {...field}
                           showSearch
                           placeholder="Select a category"
                           style={{ width: "100%" }}
                           filterOption={(input, option) =>
                              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                           }
                           options={[
                              { value: "Electronics", label: "Electronics" },
                              { value: "Clothing", label: "Clothing" },
                              { value: "Books", label: "Books" },
                              { value: "Jewellery", label: "Jewellery" },
                           ]}
                        />
                     )}
                  />
                  {errors.category && (
                     <span className="text-red-500">{errors.category.message}</span>
                  )}
               </div>

               {/* Price Field */}
               <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300">Price</label>
                  <Controller
                     name="price"
                     control={control}
                     rules={{ required: "Price is required" }}
                     render={({ field }) => <Input {...field} />}
                  />
                  {errors.price && <span className="text-red-500">{errors.price.message}</span>}
               </div>

               {/* Stock Field */}
               <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300">Stock</label>
                  <Controller
                     name="stock"
                     control={control}
                     rules={{ required: "Stock is required" }}
                     render={({ field }) => <Input {...field} />}
                  />
                  {errors.stock && <span className="text-red-500">{errors.stock.message}</span>}
               </div>

               {/* Photo Field */}
               <Image photo={productsReducerStates.productsDetail.photo} />

               {/* Description Field */}
               <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300">Description</label>
                  <Controller
                     name="description"
                     control={control}
                     // rules={{ required: "Description is required" }}
                     render={({ field }) => <TextArea {...field} />}
                  />
                  {errors.description && (
                     <span className="text-red-500">{errors.description.message}</span>
                  )}
               </div>

               {/* Submit Button */}
               <div className="w-full flex justify-between">
                  <Button type="default" htmlType="button" onClick={() => navigate("/myProduct")}>
                     Cancel
                  </Button>
                  <Button type="primary" htmlType="submit">
                     Update
                  </Button>
               </div>
            </form>
         )}
      </div>
   );
};

export default EditProduct;
