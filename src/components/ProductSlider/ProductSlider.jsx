/* eslint-disable react/prop-types */
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = ({ flashSalesProduct, BestSellingProductsData, OurProducts }) => {
   // Combine both datasets
   const combinedProducts = [
      ...(flashSalesProduct || []),
      ...(BestSellingProductsData || []),
      ...(OurProducts || [])
   ];

   const settings = {
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      arrows: false,
      pauseOnHover: false,
   };

   return (
      <div className="p-4">
         {combinedProducts.length > 0 ? (
            <Slider {...settings}>
               {combinedProducts.map((product, index) => (
                  <div key={index} className="p-2">
                     <ProductCard product={product} />
                  </div>
               ))}
            </Slider>
         ) : (
            <div>No products available</div>
         )}
      </div>
   );
};

export default ProductSlider;
