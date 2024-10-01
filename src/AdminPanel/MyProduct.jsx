// src/ProductTable.jsx
import { Table, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProductLoad } from "../redux/action/product_action";
import { useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const MyProduct = () => {
   const dispatch = useDispatch();
   const loader = useSelector((state) => state?.ProductReducer?.getProductAdminLoader);
   const products = useSelector((state) => state?.ProductReducer?.adminProducts?.data?.Products);
   console.log("ADMIN_PRODUCT", products);
   console.log("LOADER", loader);

   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const columns = [
      {
         title: "Checkbox",
         dataIndex: "checkbox",
         render: (_, record) => (
            <Controller
               name={`select.${record._id}`} // Create a unique name for each checkbox
               control={control}
               defaultValue={false}
               rules={{ required: { value: true, message: "At least one item must be selected" } }}
               render={({ field: { onChange, value } }) => (
                  <Checkbox checked={value} onChange={(e) => onChange(e.target.checked)} />
               )}
            />
         ),
      },
      {
         title: "S.No.",
         dataIndex: "serial",
         key: "key",
         render: (_, __, index) => index + 1,
      },
      {
         title: "Image",
         dataIndex: "photo",
         key: "image",
         render: (image) => (
            <img src={image} alt="Product" style={{ width: "50px", height: "50px" }} />
         ),
      },
      {
         title: "ID Number",
         dataIndex: "_id",
         key: "id",
      },
      {
         title: "Category",
         dataIndex: "category",
         key: "category",
      },
      {
         title: "Name",
         dataIndex: "name",
         key: "name",
      },
      {
         title: "Price",
         dataIndex: "price",
         key: "price",
      },
      {
         title: "In Stock",
         dataIndex: "stock",
         key: "stock",
      },
      {
         title: "Actions",
         key: "actions",
         render: (_, record) => (
            <div className="flex space-x-2">
               <AiFillEdit
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleEdit(record._id)} // Handle edit action
               />
               <AiFillDelete
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDelete(record._id)} // Handle delete action
               />
            </div>
         ),
      },
   ];

   const handleEdit = (id) => {
      console.log(`Edit Product: ${id}`);
   };

   const handleDelete = (id) => {
      console.log(`Delete Product: ${id}`);
   };

   useEffect(() => {
      dispatch(getAdminProductLoad());
   }, []);

   const onSubmit = (data) => {
      // Handle form submission
      console.log("Selected Products:", data);
   };

   return (
      <div className="p-4">
         <form onSubmit={handleSubmit(onSubmit)}>
            {products && (
               <Table
                  dataSource={products.map((product) => ({
                     ...product,
                     key: product._id, // Ensure each product has a unique key for Table
                  }))}
                  columns={columns}
                  pagination={false}
                  loading={loader}
               />
            )}
            {errors.select && <span className="text-red-500">{errors.select.message}</span>}
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
               Submit
            </button>
         </form>
      </div>
   );
};

export default MyProduct;
