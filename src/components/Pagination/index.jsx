/* eslint-disable react/prop-types */
import { Pagination } from "antd";

const Page = ({ totalPage, currentPage, onChange }) => (
   <Pagination
      current={currentPage}
      total={totalPage}
      totalPage={totalPage}
      onChange={onChange}
      showSizeChanger={false}
      showQuickJumper
      hideOnSinglePage
      pageSize={1}
      size="small"
      showPrevNextJumpers={false}
      showTotal={(totalPage) => `Total ${totalPage} Pages`}
   />
);
export default Page;
