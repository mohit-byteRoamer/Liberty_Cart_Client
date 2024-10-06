import React from "react";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, } from "antd";
import { useSelector } from "react-redux";
const { Content, Sider } = Layout;
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
   const key = String(index + 1);
   return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
         const subKey = index * 4 + j + 1;
         return {
            key: subKey,
            label: `option${subKey}`,
         };
      }),
   };
});
const AllProducts = () => {
    const allproducts = useSelector((state) => state)
    console.log("ALL_PRODUCTS",allproducts);
    
   return (
      <Layout className="h-full bg-white py-2">
         <Content className="bg-white h-full shadow-lg">
            <Layout className="rounded-lg">
               <Sider className="bg-white w-52">
                  <Menu
                     mode="inline"
                     defaultSelectedKeys={["1"]}
                     defaultOpenKeys={["sub1"]}
                     style={{
                        height: "100%",
                     }}
                     items={items2}
                  />
               </Sider>
               <Content className="bg-white h-screen rounded-lg">Content</Content>
            </Layout>
         </Content>
      </Layout>
   );
};
export default AllProducts;
