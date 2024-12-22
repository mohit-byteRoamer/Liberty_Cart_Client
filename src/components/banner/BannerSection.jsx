import { Layout, theme } from "antd";
import Banner from "./Banner";

const { Content } = Layout; // Missing 'Header' added

const BannerSection = () => {
   const {
      token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();

   return (
      <Layout className="bg-white dark:bg-gray-800 dark:text-white">
         <Content>
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
