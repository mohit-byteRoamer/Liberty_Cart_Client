import { useNavigate } from "react-router-dom";
import BrowseByCategory from "../components/browseByCategory/BrowseByCategory";
import ExploreOurProduct from "../components/exploreOurProduct/ExploreOurProduct";
// import FlashSales from "../components/FlashSales/FlashSales";
import LatestProducts from "../components/latestProducts/LatestProducts";
import NewArrival from "../components/newArrival/NewArrival";
import { useEffect } from "react";
import BannerSection from "../components/banner/BannerSection";

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
