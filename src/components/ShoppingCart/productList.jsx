/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
// ProductList.jsx
import { Table } from "antd";


const ProductList = ({ columns, transformedCartData, loading }) => {
   return (
      <div className="bg-white p-4 shadow-md rounded-md w-full">
         <h2 className="text-xl font-semibold mb-4">Shopping Bag</h2>
         <Table
            // className="border-2"
            loading={loading} // Loading state
            columns={columns} // Table columns
            dataSource={transformedCartData} // Transformed cartData
            scroll={{ x: 500 }}
            pagination={false}
         />
      </div>
   );
};

export default ProductList;
