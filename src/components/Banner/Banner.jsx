import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Banner() {
   const settings = {
      dots: false,
      infinite: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: false,
   };

   return (
      <div className="slider-container px-5 min-h-[64vh] w-full relative">
         <Slider {...settings}>
            <div className="relative w-full h-full">
               <img
                  className="object-cover w-full h-full"
                  src="https://i0.wp.com/www.appleshop.pk/wp-content/uploads/2020/03/iPhone-11-Pro-Inner-Banner-1920-X-710-Website.jpg?ssl=1"
                  alt=""
               />
            </div>
            <div className="relative w-full h-full">
               <img
                  className="object-cover w-full h-full"
                  src="https://www.iphone.com.pk/gallary/202307122837slider-1.jpg"
                  alt=""
               />
            </div>
            <div className="relative w-full h-full">
               <img
                  className="object-fill w-full h-full"
                  src="https://tiendazero.com.uy/wp-content/uploads/Banner-apple-iphone-14.webp"
                  alt="3"
               />
            </div>
            <div className="relative w-full h-full">
               <img
                  className="object-cover w-full h-[62vh]"
                  src="https://zonesindia.co.in/img/apple/Banner-imac.jpg"
                  alt="4"
               />
            </div>
            <div className="relative w-full h-full">
               <img
                  className="object-cover w-full h-[62vh]"
                  src="https://zonesindia.co.in/img/apple/Banner-ipad-pro.jpg"
                  alt=""
               />
            </div>
            <div className="relative w-full h-full">
               <img
                  className="object-cover w-full h-[62vh]"
                  src="https://zonesindia.co.in/img/apple/MacbookAir-M3.jpg"
                  alt=""
               />
            </div>
         </Slider>
      </div>
   );
}

export default Banner;
