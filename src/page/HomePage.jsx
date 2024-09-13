import Sidebar from "../components/Banner/Sidebar";
import BestSellingProducts from "../components/BestSellingProducts/BestSellingProducts";
import BrowseByCategory from "../components/BrowseByCategory/BrowseByCategory";
import ExploreOurProduct from "../components/ExploreOurProduct/ExploreOurProduct";
import FlashSales from "../components/FlashSales/FlashSales";
import NewArrival from "../components/NewArrival/NewArrival";

function Home() {
  return (
    <div className="home-page">
      <Sidebar />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingProducts />
      <ExploreOurProduct />
      <NewArrival />
    </div>
  );
}

export default Home;
