import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BreadCrumb = () => {
   const location = useLocation();
   const pathNames = location.pathname.split("/").filter((i) => i);
   const capatilize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
   return (
      <Breadcrumb className="p-2 rounded-lg">
         <Breadcrumb.Item>
            <Link to="/">
               <HomeOutlined />
            </Link>
         </Breadcrumb.Item>
         {pathNames.map((name, index) => {
            const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathNames.length - 1;
            return (
               <Breadcrumb.Item key={index}>
                  {isLast ? capatilize(name) : <Link to={routeTo}>{capatilize(name)}</Link>}
               </Breadcrumb.Item>
            );
         })}
      </Breadcrumb>
   );
};
export default BreadCrumb;
