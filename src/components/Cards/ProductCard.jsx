/* eslint-disable react/prop-types */
import { Card, Badge, Typography, Rate } from "antd";
import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import UpdateCart from "../UpdateCart";

const { Text, Title } = Typography;

const ProductCard = ({ product }) => {
   const navigate = useNavigate();

   function handleNavigate() {
      navigate(`/product/${product._id}`);
   }

   return (
      <Card
         onClick={handleNavigate}
         className="dark:bg-gray-900 dark:text-white max-h-[42vh] relative overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
         style={{ width: 300 }}
         cover={
            <div className="relative overflow-hidden">
               {/* Image */}
               <img
                  className="h-52 w-full object-contain"
                  alt={product.name}
                  src={
                     product?.photo
                        ? product?.photo
                        : "https://rakanonline.com/wp-content/uploads/2022/08/default-product-image.png"
                  }
               />
               {/* Link - ShoppingCart */}
               <UpdateCart id={product._id}/>
               {/* Positioning icons */}
               <div className="absolute top-2 right-2 flex flex-col gap-2">
                  {/* Icon styling */}
                  <HeartOutlined className="text-white bg-black bg-opacity-50 rounded-full p-1 text-xl" />
                  <EyeOutlined className="text-white bg-black bg-opacity-50 rounded-full p-1 text-xl" />
               </div>
               <Badge.Ribbon
                  text={product.discount}
                  color="red"
                  style={{
                     top: 10,
                     left: 10,
                     position: "absolute",
                     transform: "translate(-50%, 0)",
                  }}
               />
               {/* Discount icon */}
               <div className="absolute top-2 left-2 bg-red-500 text-white font-bold text-sm rounded-full px-2 py-1 flex items-center justify-center">
                  {product.discount || "%"}
               </div>
            </div>
         }>
         <Title className="truncate" level={5}>
            {product.name}
         </Title>
         <div className="flex gap-2 mt-2">
            <Text strong className="text-red-500">
               ${product.price}
            </Text>
            <Text delete className="text-gray-500">
               ${product.oldPrice}
            </Text>
         </div>
         <Rate disabled defaultValue={product.rating} className="text-lg" />
         <Text className="ml-2">({product.reviewsCount})</Text>
      </Card>
   );
};

export default ProductCard;
