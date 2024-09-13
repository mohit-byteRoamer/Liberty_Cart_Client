import { Layout, Menu, theme } from "antd";
import { FcBusinesswoman, FcManager, FcElectroDevices, FcHome, FcSportsMode } from "react-icons/fc";
import { FaBaby } from "react-icons/fa";
import { MdOutlineLocalGroceryStore, MdHealthAndSafety } from "react-icons/md";
import { AiOutlineMedicineBox } from "react-icons/ai";
import Sider from "antd/es/layout/Sider";
import Banner from "./Banner";

const { Content} = Layout; // Missing 'Header' added

function getItem(label, key, icon, children) {
   return { key, icon, children, label };
}

const items = [
   getItem("Woman's Fashion", "Menu1", <FcBusinesswoman />, [
      getItem("Woman's Dress", "Menu1-Sub1"),
      getItem("Tops & Blouses", "Menu1-Sub2"),
      getItem("Woman's Bottoms", "Menu1-Sub3"),
      getItem("Woman's Footwear", "Menu1-Sub4"),
   ]),
   getItem("Men's Fashion", "Menu2", <FcManager />, [
      getItem("Men's Shirts", "Menu2-Sub1"),
      getItem("Trousers & Pants", "Menu2-Sub2"),
      getItem("Men's T-shirts", "Menu2-Sub3"),
      getItem("Men's Footwear", "Menu2-Sub4"),
   ]),
   getItem("Electronic", "Menu3", <FcElectroDevices />, [
      getItem("Smartphones", "Menu3-Sub1"),
      getItem("Laptops", "Menu3-Sub2"),
      getItem("Tablets", "Menu3-Sub3"),
      getItem("Cameras", "Menu3-Sub4"),
      getItem("Headphones", "Menu3-Sub5"),
   ]),
   getItem("Home & Lifestyle", "Menu4", <FcHome />, [
      getItem("Furniture", "Menu4-Sub1"),
      getItem("Kitchenware", "Menu4-Sub2"),
      getItem("Home Decor", "Menu4-Sub3"),
   ]),
   getItem("Medicine", "Menu5", <AiOutlineMedicineBox />, [
      getItem("Supplements", "Menu5-Sub1"),
      getItem("First Aid Supplies", "Menu5-Sub2"),
      getItem("Health-related Products", "Menu5-Sub3"),
   ]),
   getItem("Sports & Outdoor", "Menu6", <FcSportsMode />, [
      getItem("Exercise Gear", "Menu6-Sub1"),
      getItem("Camping Equipment", "Menu6-Sub2"),
      getItem("Athletic Wear", "Menu6-Sub3"),
   ]),
   getItem("Baby's & Toys", "Menu7", <FaBaby />, [
      getItem("Toys", "Menu7-Sub1"),
      getItem("Clothing", "Menu7-Sub2"),
      getItem("Nursery Essentials", "Menu7-Sub3"),
   ]),
   getItem("Groceries & Pets", "Menu8", <MdOutlineLocalGroceryStore />, [
      getItem("Food", "Menu8-Sub1"),
      getItem("Toys", "Menu8-Sub2"),
      getItem("Supplies for Pets", "Menu8-Sub3"),
   ]),
   getItem("Health & Beauty", "Menu9", <MdHealthAndSafety />, [
      getItem("Skincare Products", "Menu9-Sub1"),
      getItem("Makeup", "Menu9-Sub2"),
      getItem("Personal Care items", "Menu9-Sub3"),
      getItem("Wellness Supplements", "Menu9-Sub4"),
      getItem("Beauty Tools", "Menu9-Sub5"),
   ]),
];

const Sidebar = () => {
   const {
      token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();

   return (
      <Layout className="flex pt-5 bg-white">
         <Sider>
            <Menu
               // theme="dark"
               mode="vertical"
               defaultSelectedKeys={["2"]}
               items={items}
               style={{ flex: 1 }}
               className="border border-r-2"
            />
         </Sider>
         <Content>
            <div
               style={{
                  background: colorBgContainer,
                  minHeight: 280,
                  // padding: 24,
                  borderRadius: borderRadiusLG,
               }}>
              <Banner/> 
            </div>
         </Content>
      </Layout>
   );
};

export default Sidebar;
