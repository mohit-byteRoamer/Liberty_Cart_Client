import { Layout, Menu } from "antd";
import { HomeOutlined, ShoppingCartOutlined, UserOutlined, FileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
   return (
      <Sider breakpoint="lg" collapsedWidth="0">
         <div className="logo p-4 text-white text-center font-bold">Admin</div>
         <Menu theme="dark" mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
               <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
               <Link to="/products">Products</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
               <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<FileOutlined />}>
               <Link to="/orders">Orders</Link>
            </Menu.Item>
         </Menu>
      </Sider>
   );
};

export default Sidebar;
