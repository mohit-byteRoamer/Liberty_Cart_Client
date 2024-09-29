import { useForm, Controller } from "react-hook-form";
import { Select, Input, Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProductLoad } from "../redux/action/product_action";
import Image from "./Image";

const AddProductForm = () => {
   const photo = useSelector((state) => state?.UploadFileReducer?.uploadFile)
   
   const { TextArea } = Input;
   const [clientReady, setClientReady] = useState(false);
   const dispatch = useDispatch();
   const {
      handleSubmit,
      control,
      reset,
      formState: { errors },
   } = useForm({ defaultValues: { price: 0 } });

   useEffect(() => {
      setClientReady(true);
   }, []);

   const onSubmit = (data) => {
      dispatch(
         createProductLoad({
            name: data.Name,
            price: data.price,
            stock: data.Stock,
            category: data.Category,
            photo: photo,
         })
      );
      reset()
   };

   return (
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md my-5 dark:bg-gray-900 dark:text-white">
         <h1 className="text-2xl font-bold mb-6">Product Information</h1>

         <form onSubmit={handleSubmit(onSubmit)}>
            {/* Image Upload */}
            <Image />

            {/* Name Field */}
            <div className="mb-6">
               <label className="block text-lg font-medium mb-2">Name</label>
               <Controller
                  name="Name"
                  control={control}
                  rules={{
                     required: "Name is required",
                     minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters long",
                     },
                     maxLength: {
                        value: 50,
                        message: "Name cannot exceed 50 characters",
                     },
                     pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Name can only contain letters and spaces",
                     },
                  }}
                  render={({ field }) => (
                     <>
                        <Input {...field} allowClear placeholder="Name" />
                     </>
                  )}
               />
               {errors.Name && <p className="text-red-500">{errors.Name.message}</p>}
            </div>

            {/* Description Field */}
            <div className="mb-6">
               <label className="block text-lg font-medium mb-2">Description</label>
               <Controller
                  name="Description"
                  type="text"
                  control={control}
                  rules={{
                     // required: "Description is required",
                     minLength: {
                        value: 10,
                        message: "Description must be at least 10 characters long",
                     },
                     maxLength: {
                        value: 200,
                        message: "Description cannot exceed 100 characters",
                     },
                  }}
                  render={({ field }) => (
                     <>
                        <TextArea
                           {...field}
                           placeholder="Description"
                           autoSize={{ minRows: 3, maxRows: 6 }}
                        />
                     </>
                  )}
               />
               {errors.Description && <p className="text-red-500">{errors.Description.message}</p>}
            </div>

            {/* Stock */}
            <div className="mb-6">
               <label className="block text-lg font-medium mb-2">Stock</label>
               <Controller
                  name="Stock"
                  control={control}
                  type="number"
                  rules={{
                     required: "Price is required",
                     min: {
                        value: 1,
                        message: "Price must be at least 1",
                     },
                     max: {
                        value: 10000,
                        message: "Price cannot exceed 10000",
                     },
                     pattern: {
                        value: /^\d+(\.\d{1,2})?$/,
                        message: "Price must be a valid number with up to 2 decimal places",
                     },
                  }}
                  render={({ field }) => (
                     <>
                        <Input {...field} allowClear placeholder="Stock" />
                     </>
                  )}
               />
               {errors.Stock && <p className="text-red-500">{errors.Stock.message}</p>}
            </div>

            {/* Price */}
            <div className="mb-6">
               <label className="block text-lg font-medium mb-2">Price</label>
               <Controller
                  name="price"
                  control={control}
                  type="number"
                  rules={{
                     required: "Price is required",
                     min: {
                        value: 1,
                        message: "Price must be at least 1",
                     },
                     max: {
                        value: 10000,
                        message: "Price cannot exceed 10000",
                     },
                     pattern: {
                        value: /^\d+(\.\d{1,2})?$/,
                        message: "Price must be a valid number with up to 2 decimal places",
                     },
                  }}
                  render={({ field }) => (
                     <Input {...field} allowClear placeholder="Price" type="number" />
                  )}
               />

               {errors.price && <p className="text-red-500">{errors.price.message}</p>}
            </div>

            {/* Category */}
            <div className="mb-6">
               <label className="block text-lg font-medium mb-2">Category</label>
               <Controller
                  name="Category"
                  control={control}
                  rules={{
                     required: "Category is required",
                  }}
                  render={({ field }) => (
                     <>
                        <Select
                           {...field}
                           showSearch
                           placeholder="Select a person"
                           style={{ width: "100%" }}
                           filterOption={(input, option) =>
                              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                           }
                           options={[
                              {
                                 value: "Electronics",
                                 label: "Electronics",
                              },
                              {
                                 value: "Men's clothing",
                                 label: "Men's clothing",
                              },
                              {
                                 value: "Women's clothing",
                                 label: "Women's clothing",
                              },
                              {
                                 value: "Jewellery",
                                 label: "Jewellery",
                              },
                           ]}
                        />
                     </>
                  )}
               />
               {errors.Category && <p className="text-red-500">{errors.Category.message}</p>}
            </div>

            {/* Form Actions */}
            <div className="flex justify-between items-center">
               <Button type="button" className="text-gray-500 hover:underline">
                  Cancel
               </Button>

               <Button
                  className="px-6 py-2 rounded-md"
                  type="primary"
                  htmlType="submit"
                  disabled={!clientReady}>
                  Continue
               </Button>
            </div>
         </form>
      </div>
   );
};

export default AddProductForm;
