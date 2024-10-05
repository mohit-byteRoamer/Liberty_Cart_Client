/* eslint-disable react/prop-types */
import { Pagination } from "antd";

const Page = ({ totalPage, currentPage, onChange }) => (
   <Pagination
      current={currentPage}
      total={totalPage}
      onChange={onChange}
      showSizeChanger={false}
      showQuickJumper
      hideOnSinglePage
      pageSize={1}
      size="small"
      showPrevNextJumpers={false}
      showTotal={(total) => `Total ${total} items`}
   />
);
export default Page;
