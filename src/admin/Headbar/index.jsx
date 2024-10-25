import { Layout } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { FaUserCircle } from "react-icons/fa";

const { Header } = Layout;

const HeaderBar = () => {
   return (
      <Header className="bg-white flex justify-between items-center px-4">
         <div className="text-lg font-bold">Admin Dashboard</div>
         <div className="flex items-center space-x-4">
            <BellOutlined style={{ fontSize: "20px" }} />
            <FaUserCircle style={{ fontSize: "25px" }} />
         </div>
      </Header>
   );
};

export default HeaderBar;
