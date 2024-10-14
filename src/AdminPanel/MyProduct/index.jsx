/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { deleteProductLoad, getAdminProductLoad } from "../../redux/action/product_action";

const MyProduct = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const sagaProducts = useSelector((state) => state?.ProductReducer?.adminProducts);
   const loader = useSelector((state) => state?.ProductReducer?.getProductAdminLoader);
   console.log("PRODUCT", sagaProducts);
   
   const [pageNumber, setPageNumber] = useState(1);
   console.log("PAGE_NUMBER", pageNumber);
   

   useEffect(() => {
      dispatch(getAdminProductLoad(pageNumber));
   }, [pageNumber]);

   // Columns configuration for Ant Design Table
   const columns = [
      // Serial Number
      {
         title: "S.No.",
         key: "serial",
         render: (_, __, index) => index + 1, // Serial number for each row
      },
      // Image
      {
         title: "Image",
         dataIndex: "photo",
         key: "photo",
         render: (image) => (
            <img src={image} alt="ProductImages" style={{ width: "50px", height: "50px" }} />
         ),
      },
      // Product name
      {
         title: "Product Name",
         dataIndex: "name",
         key: "name",
      },
      // Category
      {
         title: "Category",
         dataIndex: "category",
         key: "category",
      },
      // Description
      {
         title: "Description",
         dataIndex: "description",
         key: "description",
      },
      // Price
      {
         title: "Price",
         dataIndex: "price",
         key: "price",
      },
      // Stock
      {
         title: "Stock",
         dataIndex: "stock",
         key: "stock",
      },
      // Actions
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

   // Edit Button
   const handleEdit = (id) => {
      navigate(`/edit-product/${id}`);
   };

   // Delete Button
   const handleDelete = (id) => {
      dispatch(deleteProductLoad({id, pageNumber}));
   };

   return (
      <div className="container mx-auto shadow-lg">
         <Table
            onChange={(page) => setPageNumber(page.current)}
            pagination={{
               pageSize: 10,
               showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
               total: sagaProducts?.totalPage * 10,
            }} // Set page size to 5
            loading={loader} // Show loading indicator while data is being fetched
            dataSource={sagaProducts}
            columns={columns}
            rowKey={(record) => record._id || record.name} // Unique key for each row
         />
      </div>
   );
};

export default MyProduct;
