/* eslint-disable react-hooks/exhaustive-deps */
// ProductList.jsx
import { Table, InputNumber, Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItemLoad, getCartListLoad } from "../../redux/action/cart_actions";
import { DeleteOutlined } from "@ant-design/icons";

const ProductList = () => {
   const dispatch = useDispatch();
   const cartData = useSelector((state) => state?.CartReducer); // cartData extract kiya state se
   console.log("Cart Data", cartData);

   useEffect(() => {
      dispatch(getCartListLoad());
   }, []);

   // Transform cartData to match the Table's dataSource structure
   const transformedCartData = cartData?.cartData.map((item) => {
      console.log("MAP_Item", item); // Log each item to see the original data

      return {
         userId: item._id, // Unique key for each row
         productId: item.productId._id, // Product ID from productId
         name: item.productId.name, // Product name from productId
         image: item.productId.photo, // Image link from productId
         price: item.productId.price, // Price from productId
         stock: item.productId.stock, // Price from stock
         category: item.productId.category, // Category from productId
         quantity: item.quantity, // Quantity from the cart item
         color: item.productId.category, // Assuming category is used as color
         size: "42", // Add size if available or replace with appropriate data
      };
   });

   const handleDelete = (id) => {
      console.log("Delete item with key:", id);
      dispatch(deleteCartItemLoad(id));
   };

   const columns = [
      // Title : Product
      {
         title: "Product",
         dataIndex: "name",
         key: "name",
         render: (text, record) => (
            <div className="flex items-center">
               <img src={record.image} alt={record.name} className="w-16 h-16 object-cover mr-4" />
               <div>
                  <div className="font-semibold">{record.name}</div>
                  <div className="text-sm text-gray-500">Category: {record.category}</div>
                  <div className="text-sm text-gray-500">Size: {record.size}</div>
               </div>
            </div>
         ),
      },
      // Title : Price
      {
         title: "Price",
         dataIndex: "price",
         key: "price",
         render: (price) => <span>${price.toFixed(2)}</span>,
      },
      // Title : Quantity
      {
         title: "Quantity",
         dataIndex: "quantity",
         key: "quantity",
         render: (quantity) => <InputNumber min={1} defaultValue={quantity} className="mx-2" />,
      },
      // Title : TOtal Price
      {
         title: "Total Price",
         key: "total",
         render: (_, record) => (
            <span className="text-orange-500 font-semibold">
               ${(record.price * record.quantity).toFixed(2)}
            </span>
         ),
      },
      // Title : Delete_Action
      {
         title: "Action",
         key: "delete",
         render: (_, record) => (
            <Button
               loading={cartData?.deleteCartItemLoader}
               onClick={() => handleDelete(record.userId)}
               type="primary"
               danger>
               <DeleteOutlined />
            </Button>
         ),
      },
   ];

   return (
      <div className="bg-white p-4 shadow-md rounded-md w-full">
         <h2 className="text-xl font-semibold mb-4">Shopping Bag</h2>
         <Table
            loading={cartData?.getCartLoader} // Loading state
            columns={columns} // Table columns
            dataSource={transformedCartData} // Transformed cartData
            pagination={false}
         />
      </div>
   );
};

export default ProductList;
