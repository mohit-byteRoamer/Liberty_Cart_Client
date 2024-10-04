/* eslint-disable react-hooks/exhaustive-deps */
// src/ProductTable.jsx
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import toast from "react-hot-toast";
import { getProductDetailLoad, updateProductLoad } from "../../redux/action/product_action";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
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
   } = useForm({ defaultValues: { price: 0 } });

   const productsDetail = useSelector((state) => state?.ProductReducer?.productsDetail);

   useEffect(() => {
      // Fetch product details by ID
      dispatch(getProductDetailLoad(id));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [id]);

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
            <div className="h-screen w-full flex items-center justify-center">
               <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
            </div>
         </div>
      );
   }

   const onUpdateSubmit = (data) => {
      console.log("DATA", data);

      // Handle form submission
      const updateData = {
         ...data,
         id: productsDetail._id,
      };
      console.log("ID", updateData);

      dispatch(updateProductLoad(updateData));
   };

   return (
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md my-5 dark:bg-gray-900 dark:text-white">
         <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
         {productsDetail && (
            <form onSubmit={handleSubmit(onUpdateSubmit)}>
               {/* Name Field */}
               <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300">Name</label>
                  <Controller
                     name="Name"
                     control={control}
                     defaultValue={productsDetail.name}
                     rules={{ required: "Name is required" }}
                     render={({ field }) => <Input {...field} />}
                  />
                  {errors.Name && <span className="text-red-500">{errors.Name.message}</span>}
               </div>

               {/* Category Field */}
               <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300">Category</label>
                  <Controller
                     name="category" // Corrected field name
                     control={control}
                     defaultValue={productsDetail.category}
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
                              { value: "electronics", label: "Electronics" },
                              { value: "clothing", label: "Clothing" },
                              { value: "books", label: "Books" },
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
                     defaultValue={productsDetail.price}
                     render={({ field }) => <Input {...field} />}
                  />
               </div>

               {/* Stock Field */}
               <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300">Stock</label>
                  <Controller
                     name="stock"
                     control={control}
                     defaultValue={productsDetail.stock}
                     render={({ field }) => <Input {...field} />}
                  />
               </div>

               {/* Photo Field */}
               <Image photo={productsDetail.photo} />

               {/* Description Field */}
               <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300">Description</label>
                  <Controller
                     name="description"
                     control={control}
                     defaultValue={productsDetail.description}
                     render={({ field }) => <TextArea {...field} />}
                  />
               </div>
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
