/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import CartSummary from "./CartSummary";
import ProductList from "./productList";
import { useDispatch, useSelector } from "react-redux";
import { InputNumber, Button } from "antd";
import { useEffect, useState } from "react";
import {
   deleteCartItemLoad,
   getCartListLoad,
   updateCartListLoad,
} from "../../redux/action/cart_actions";
import { DeleteOutlined } from "@ant-design/icons";

function shoppingCart() {
   const dispatch = useDispatch();
   const cartData = useSelector((state) => state?.CartReducer);
   const [selectedItem, setSelectedItem] = useState();

   useEffect(() => {
      dispatch(getCartListLoad());
   }, []);

   // Transform cartData to match the Table's dataSource structure
   const transformedCartData = cartData?.cartData.map((item, key) => {
      return {
         key: key,
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

   const handleDelete = (id, removeProductSuccessFunctionCall) => {
      setSelectedItem(id);
      dispatch(deleteCartItemLoad({ id, removeProductSuccessFunctionCall }));
   };

   const handleQuantityChange = (newValue, record, removeProductSuccessFunctionCall) => {
      if (newValue > record.quantity) {
         dispatch(
            updateCartListLoad({
               apiPayload: { productId: record.productId, quantity: newValue, action: "increase" },
               removeProductSuccessFunctionCall,
            })
         );
      } else if (newValue < record.quantity) {
         dispatch(
            updateCartListLoad({
               apiPayload: {
                  productId: record.productId,
                  quantity: newValue,
                  action: "decrease",
               },
               removeProductSuccessFunctionCall,
            })
         );
      }
   };

   const removeProductSuccessFunctionCall = () => {
      dispatch(getCartListLoad());
      setSelectedItem(null);
   };

   const columns = [
      // Title : Product
      {
         title: "Product",
         dataIndex: "name",
         key: "name",
         width: 200,
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
         width: 100,
         render: (price) => <span>${price.toFixed(2)}</span>,
      },
      // Title : Quantity
      {
         title: "Quantity",
         dataIndex: "quantity",
         key: "quantity",
         width: 100,
         render: (quantity, record) => (
            <InputNumber
               min={1}
               defaultValue={quantity}
               onChange={(newValue) =>
                  handleQuantityChange(newValue, record, removeProductSuccessFunctionCall)
               }
            />
         ),
      },
      // Title : TOtal Price
      {
         title: "Total Price",
         key: "total",
         width: 100,
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
         width: 50,
         render: (_, record) => (
            <Button
               loading={record.userId === selectedItem && cartData?.deleteCartItemLoader}
               onClick={() => handleDelete(record.userId, removeProductSuccessFunctionCall)}
               type="primary"
               danger>
               <DeleteOutlined />
            </Button>
         ),
      },
   ];

   return (
      <div className="flex justify-between p-8 bg-gray-50">
         <div className="w-3/5 bg-white shadow-md rounded-md p-4">
            <ProductList columns={columns} transformedCartData={transformedCartData} loading={cartData?.getCartLoader} />
         </div>
         <div className="w-1/3 ml-4">
            <CartSummary />
         </div>
      </div>
   );
}

export default shoppingCart;
