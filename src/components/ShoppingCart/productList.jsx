// ProductList.jsx
import { useState } from "react";
import { Table, InputNumber, Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const ProductList = () => {
   const [products, setProducts] = useState([
      {
         key: 1,
         image: "https://m.media-amazon.com/images/I/51xQoVF21NL._SY679_.jpg",
         name: "Floral Print Wrap Dress",
         price: 20.5,
         quantity: 1,
         color: "Blue",
         size: "42",
      },
      {
         key: 2,
         image: "https://m.media-amazon.com/images/I/41A9hhtCjwL._SX679_.jpg",
         name: "Floral Print Wrap Dress",
         price: 30.5,
         quantity: 1,
         color: "Blue",
         size: "42",
      },
   ]);

   // Table columns
   const columns = [
      {
         title: "Product",
         dataIndex: "name",
         key: "name",
         render: (text, record) => (
            <div className="flex items-center">
               <img src={record.image} alt={record.name} className="w-16 h-16 object-cover mr-4" />
               <div>
                  <div className="font-semibold">{record.name}</div>
                  <div className="text-sm text-gray-500">Color: {record.color}</div>
                  <div className="text-sm text-gray-500">Size: {record.size}</div>
               </div>
            </div>
         ),
      },
      {
         title: "Price",
         dataIndex: "price",
         key: "price",
         render: (price) => <span>${price.toFixed(2)}</span>,
      },
      {
         title: "Quantity",
         dataIndex: "quantity",
         key: "quantity",
         render: (quantity, record) => (
            <div className="flex items-center">
               <Button
                  icon={<MinusOutlined />}
                  size="small"
                  onClick={() => updateQuantity(record.key, -1)}
               />
               <InputNumber min={1} value={quantity} className="mx-2" />
               <Button
                  icon={<PlusOutlined />}
                  size="small"
                  onClick={() => updateQuantity(record.key, 1)}
               />
            </div>
         ),
      },
      {
         title: "Total Price",
         key: "total",
         render: (_, record) => (
            <span className="text-orange-500 font-semibold">
               ${(record.price * record.quantity).toFixed(2)}
            </span>
         ),
      },
   ];

   const updateQuantity = (key, change) => {
      setProducts((prev) =>
         prev.map((product) =>
            product.key === key
               ? { ...product, quantity: Math.max(1, product.quantity + change) }
               : product
         )
      );
   };

   return (
      <div className="bg-white p-4 shadow-md rounded-md">
         <h2 className="text-xl font-semibold mb-4">Shopping Bag</h2>
         <Table
            dataSource={products}
            columns={columns}
            pagination={false}
            bordered={false}
            className="custom-ant-table"
         />
      </div>
   );
};

export default ProductList;
