import { useState } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const TabsMenu = () => {
   const [activeTab, setActiveTab] = useState("allProduct");

   const handleTabChange = (key) => {
      setActiveTab(key);
      // Based on `key`, fetch the specific category products (e.g., via Redux-Saga)
   };

   return (
      <Tabs
         activeKey={activeTab}
         onChange={handleTabChange}
         className="custom-tabs"
         tabBarGutter={10}
         type="card"
         size="large">
         <TabPane tab="All Products" key="allProduct"></TabPane>
         <TabPane tab="Product Categories" key="productCategories"></TabPane>
         <TabPane tab="Latest Product" key="latestProduct"></TabPane>
      </Tabs>
   );
};

export default TabsMenu;
