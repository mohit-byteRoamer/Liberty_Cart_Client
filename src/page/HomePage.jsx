import { useNavigate } from "react-router-dom";
import BrowseByCategory from "../components/BrowseByCategory/BrowseByCategory";
import ExploreOurProduct from "../components/ExploreOurProduct/ExploreOurProduct";
// import FlashSales from "../components/FlashSales/FlashSales";
import LatestProducts from "../components/LatestProducts/LatestProducts";
import NewArrival from "../components/NewArrival/NewArrival";
import { useEffect } from "react";
import BannerSection from "../components/Banner/BannerSection";

function Home() {
   const navigate = useNavigate();
   const token = localStorage.getItem("token");

   useEffect(() => {
      if (!token) {
         navigate("/login"); // Correct usage of navigation
      }
   }, [token, navigate]);

   return (
      <div className="home-page">
         <BannerSection />
         {/* <FlashSales /> */}
         <BrowseByCategory />
         <LatestProducts />
         <ExploreOurProduct />
         <NewArrival />
      </div>
   );
}

export default Home;
