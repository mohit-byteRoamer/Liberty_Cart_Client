import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Input, Menu } from "antd";
import Layout, { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";

// Import Option from the correct location
const AppHeader = () => {
   return (
      <Layout className="h-32 border-b">
         {/* Heading Start */}
         <div className="flex items-center justify-center bg-black text-white relative h-[30%]">
            <h1 className="text-center">
               Summer Sale For All Suits And Free Express Delivery - OFF 50%!{" "}
               <Link to={"/shop_now"}>
                  <span className="font-bold underline cursor-pointer hover:text-blue-400">
                     ShopNow!
                  </span>
               </Link>
            </h1>
         </div>
         {/* Heading End */}
         {/* Header Start */}
         <Header className="header flex justify-between items-center bg-white h-[70%] pt-6">
            <div className="logo w-2/12">
               <Title level={2}>
                  <Link to="/">
                     <span className="text-black hover:text-blue-500 font-bold">Liberty Card</span>{" "}
                  </Link>
               </Title>
            </div>
            <Menu
               className="font-semibold"
               style={{ width: "50%", border: "none" }}
               mode="horizontal"
               // defaultSelectedKeys={['1']}
               items={[
                  {
                     key: "1",
                     label: <Link to="/">Home</Link>,
                  },
                  {
                     key: "2",
                     label: <Link to="/contact">Contact</Link>,
                  },
                  {
                     key: "3",
                     label: <Link to="/about">About</Link>,
                  },
                  {
                     key: "4",
                     label: <Link to="/signup">Signup</Link>,
                  },
               ]}
            />
            <div className="flex">
               <Input.Search placeholder="What are you looking for?" />
            </div>
            {/* Icons */}
            <div className="flex space-x-4">
               <Link to="/wishlist">
                  <HeartOutlined style={{ fontSize: "25px" }} />
               </Link>
               <Link to="/shoppingCart">
                  <ShoppingCartOutlined style={{ fontSize: "25px" }} />
               </Link>
            </div>
         </Header>
         {/* Header End */}
      </Layout>
   );
};

export default AppHeader;
