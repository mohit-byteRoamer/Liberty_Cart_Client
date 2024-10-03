/* eslint-disable react-hooks/exhaustive-deps */
// src/ProductTable.jsx
import { Table, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { getAdminProductLoad, updateProductLoad } from "../../redux/action/product_action";
// getAdminProductLoad
// updateProductLoad
const MyProduct = () => {
   const { id } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const loader = useSelector((state) => state?.ProductReducer?.getProductAdminLoader);
   const products = useSelector((state) => state?.ProductReducer?.adminProducts?.data?.Products);
   // const updateSelector = useSelector((state) => state);
   const [editingProduct, setEditingProduct] = useState(null);

   console.log("editingProduct", editingProduct);

   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm();

   useEffect(() => {
      if (id && products?.length >= 0) {
         const filteredProduct = products.filter((product) => product._id === id);
      
         if (filteredProduct) {
            console.log("PRODUCT_TO_EDIT", filteredProduct);
            setEditingProduct(pre=>({...pre,...filteredProduct[0]}));
         } else {
            setEditingProduct(null);
            toast.error("Product not found");
         }
      }
   }, [id, products]);

   useEffect(() => {
      setEditingProduct(null);

      dispatch(getAdminProductLoad());
   }, []);

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
      // Handle edit action, e.g., navigate to an edit page or open a modal
      navigate(`/myProduct/edit-product/${id}`);
   };

   const handleDelete = (id) => {
      console.log(`Delete Product: ${id}`);
   };

   const onUpdateSubmit = (data) => {
      // Handle form submission
      const updateData = {
         ...data,
         _id: editingProduct._id,
      };
      dispatch(updateProductLoad(updateData));
      navigate("/myProduct");
   };
console.log(editingProduct,"editingProduct");

   return (
      <div className="flex border-2 p-4">
         {id && editingProduct ? (
            <form key={id} onSubmit={handleSubmit(onUpdateSubmit)}>
               {/* NAME */}
               <Controller
                  name="name"
                  key={id}
                  control={control}
                  defaultValue={editingProduct.name}
                  render={({ field }) => <input {...field} placeholder="Name" />}
               />
               {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
               {/* PRICE */}
               <Controller
                  name="price"
                  control={control}
                  defaultValue={editingProduct.price}
                  render={({ field }) => <input {...field} placeholder="Price" />}
               />
               {errors.price && <p className="text-red-600 text-sm">{errors.price.message}</p>}
               {/* STOCK */}
               <Controller
                  name="stock"
                  control={control}
                  defaultValue={editingProduct.stock}
                  render={({ field }) => <input {...field} placeholder="Price" />}
               />
               {errors.stock && <p className="text-red-600 text-sm">{errors.stock.message}</p>}
               {/* {CATEGORY} */}
               <Controller
                  name="category"
                  control={control}
                  defaultValue={editingProduct.category}
                  render={({ field }) => <input {...field} placeholder="Price" />}
               />
               {errors.category && (
                  <p className="text-red-600 text-sm">{errors.category.message}</p>
               )}

               {/* Add more fields */}
               <div className="flex gap-5">
                  <button type="submit">Update Product</button>
                  <button type="button" onClick={() => navigate("/myProduct")}>
                     Cancel
                  </button>
               </div>
            </form>
         ) : (
            <Table dataSource={products} columns={columns} pagination={false} loading={loader} />
         )}
      </div>
   );
};

export default MyProduct;
