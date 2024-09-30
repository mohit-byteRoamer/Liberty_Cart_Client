/* eslint-disable react/prop-types */
import { Card, Badge, Typography, Rate, Button } from "antd";
import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { Text, Title } = Typography;

const ProductCard = ({ product }) => {
   const [hovered, setHovered] = useState(false);
   const navigate = useNavigate();
   console.log(product, "product");
   
   function handleNavigate() {
      navigate(`/product/${product._id}`);
   }

   return (
     <Card
       onClick={handleNavigate}
       className="dark:bg-gray-900 dark:text-white max-h-[40vh] "
       style={{
         width: 300,
         position: "relative",
         overflow: "hidden",
         transform: hovered ? "scale(1.08)" : "scale(1)", // Zoom effect for the whole card
         transition: "transform 0.3s ease-in-out",
       }}
       cover={
         <div style={{ position: "relative", overflow: "hidden" }}>
           <img
             alt={product.name}
             src={
               product?.photo
                 ? product?.photo
                 : "https://rakanonline.com/wp-content/uploads/2022/08/default-product-image.png"
             }
             style={{ height: 200, width: "100%", objectFit: "contain" }}
           />
           {hovered && (
             <Link to={"/shoppingCart"}>
               <Button
                 type="primary"
                 style={{
                   position: "absolute",
                   bottom: 0,
                   left: 0,
                   right: 0,
                   margin: "auto",
                   width: "90%",
                   backgroundColor: "rgba(0,0,0,0.8)",
                   borderColor: "rgba(0,0,0,0.8)",
                 }}
               >
                 Add To Cart
               </Button>
             </Link>
           )}
           {/* Positioning icons */}
           <div
             style={{
               position: "absolute",
               top: 10,
               right: 10,
               display: "flex",
               flexDirection: "column",
               gap: "10px",
             }}
           >
             <HeartOutlined
               style={{
                 fontSize: 24,
                 color: "white",
                 background: "rgba(0,0,0,0.5)",
                 borderRadius: "50%",
                 padding: 4,
               }}
             />
             <EyeOutlined
               style={{
                 fontSize: 24,
                 color: "white",
                 background: "rgba(0,0,0,0.5)",
                 borderRadius: "50%",
                 padding: 4,
               }}
             />
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
           <div
             style={{
               position: "absolute",
               top: 8,
               left: 8,
               backgroundColor: "red",
               borderRadius: "20%",
               padding: "2px 6px",
               color: "white",
               fontWeight: "bold",
               fontSize: "14px",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
             }}
           >
             {product.discount || "%"}
           </div>
         </div>
       }
       onMouseEnter={() => setHovered(true)}
       onMouseLeave={() => setHovered(false)}
     >
       <Title className="truncate" level={5}>{product.name}</Title>
       <div style={{ display: "flex", columnGap: "10px", marginTop: 10 }}>
         <Text strong style={{ color: "red" }}>
           ${product.price}
         </Text>
         <Text delete style={{ color: "gray" }}>
           ${product.oldPrice}
         </Text>
       </div>
       <Rate disabled defaultValue={product.rating} style={{ fontSize: 16 }} />
       <Text style={{ marginLeft: 8 }}>({product.reviewsCount})</Text>
     </Card>
   );
};

export default ProductCard;