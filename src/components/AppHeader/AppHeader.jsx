import { HeartOutlined, PlusSquareOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Input, Menu } from "antd";
import Layout, { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import BreadCrumb from "../../breadCrumb";

const AppHeader = () => {
   const isAuthenticated = !!localStorage.getItem("token");

   // Menu items based on authentication status
   const menuItems = [
      {
         key: "1",
         label: <Link to="/">Home</Link>,
      },
      {
         key: "2",
         label: <Link to="/about">About</Link>,
      },
      {
         key: "3",
         label: <Link to="/contact">Contact</Link>,
      },
      !isAuthenticated && {
         key: "4",
         label: <Link to="/signup">Signup</Link>,
      },
      isAuthenticated && {
         key: "5",
         label: <Link to="/myProduct">My Product</Link>,
      },
   ];

   return (
      <Layout className="border-b leading-none">
         {/* Header Start */}
         <Header className="header flex justify-between dark:bg-gray-800 dark:text-white items-center bg-white h-[70%] pt-3">
            <div className="logo w-2/12">
               <Title level={2}>
                  <Link to="/">
                     <span className="text-black dark:text-white hover:text-blue-500 font-bold">
                        Liberty Card
                     </span>{" "}
                  </Link>
               </Title>
            </div>

            {/* Menu */}
            <Menu
               className="font-semibold"
               style={{
                  width: "50%",
                  border: "none",
               }}
               mode="horizontal"
               items={menuItems}
            />

            {isAuthenticated && (
               <div className="flex">
                  <Input.Search placeholder="What are you looking for?" />
               </div>
            )}

            {/* Icons */}
            {isAuthenticated && (
               <div className="flex gap-5">
                  <Link to="/wishlist">
                     <HeartOutlined className="text-xl" />
                  </Link>
                  <Link to="/shoppingCart">
                     <ShoppingCartOutlined className="text-xl" />
                  </Link>
                  <Link to="/addProduct">
                     <PlusSquareOutlined className="text-xl" />
                  </Link>
               </div>
            )}
         </Header>
         <BreadCrumb />

         {/* Header End */}
      </Layout>
   );
};

export default AppHeader;
