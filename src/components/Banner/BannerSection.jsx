import { Layout, theme } from "antd";
import Banner from "./Banner";
import SideMenu from "../SideMenu";

const { Content } = Layout; // Missing 'Header' added

const BannerSection = () => {
   const {
      token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();

   return (
      <Layout className="flex bg-white dark:bg-gray-800 dark:text-white">
         <SideMenu />
         <Content className="pt-4">
            <div
               style={{
                  background: colorBgContainer,
                  minHeight: 280,
                  borderRadius: borderRadiusLG,
               }}>
               <Banner />
            </div>
         </Content>
      </Layout>
   );
};

export default BannerSection;
