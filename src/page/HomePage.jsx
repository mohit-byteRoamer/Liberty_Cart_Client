import Sidebar from "../components/Banner/Sidebar";
import BrowseByCategory from "../components/BrowseByCategory/BrowseByCategory";
import ExploreOurProduct from "../components/ExploreOurProduct/ExploreOurProduct";
import FlashSales from "../components/FlashSales/FlashSales";
import LatestProducts from "../components/LatestProducts/LatestProducts";
import NewArrival from "../components/NewArrival/NewArrival";
// import ProductDetails from "../components/ProductDetails/ProductDetails";


function Home() {
   return (
      <div className="home-page">
         <Sidebar />
         <FlashSales />
         <BrowseByCategory />
         <LatestProducts />
         <ExploreOurProduct />
         <NewArrival />
         {/* <ProductDetails /> */}
      </div>
   );
}

export default Home;
