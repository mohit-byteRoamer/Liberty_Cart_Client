import { UploadFileActionLoad } from "../redux/action/upload_file_action";
import { useDispatch } from "react-redux";
import { Upload, Button, message, Spin, List } from "antd"; // Importing List to display uploaded images
import { UploadOutlined } from "@ant-design/icons"; // Icon for better UI
import { useState } from "react";

function Image() {
   const dispatch = useDispatch();
   const [loading, setLoading] = useState(false); // State to manage loading status
   const [uploadedImage, setUploadedImage] = useState(null); // State to manage uploaded images
   // IMAGE UPLOAD DISPATCHER
   const fileUploadHandler = (file) => {
      const formData = new FormData();
      formData.append("image", file);

      setLoading(true); // Set loading to true when upload starts
      dispatch(UploadFileActionLoad({ formData }));

      setTimeout(() => {
         setLoading(false); // Reset loading status after simulated delay
         // Update the uploaded images list
         setUploadedImage({ name: file.name, size: file.size });
         message.success("Image uploaded successfully");
      }, 2000);
   };

   // Validation function
   const validateImage = (file) => {
      const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2; // Size in MB

      if (!isJpgOrPng) {
         message.error("You can only upload JPG/PNG file!");
      }
      if (!isLt2M) {
         message.error("Image must be smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M; // Return true if both validations pass
   };

   return (
      <div>
         <label className="block text-sm font-medium mb-2">Upload Image</label>
         <div className="flex items-center justify-between">
            {/* Upload Image Input */}
            <Upload
               beforeUpload={(file) => {
                  console.log("IMAGE", file);
                  if (validateImage) {
                     fileUploadHandler(file);
                  }
                  return false; // Stops automatic upload by Ant Design
               }}
               showUploadList={false} // Hides the default upload list
            >
               <Button className="py-[16%] bg-[#2b7cff] text-white" icon={<UploadOutlined />} disabled={loading}>
                  {loading ? <Spin size="small" /> : "Select Image"}
               </Button>
            </Upload>
            {/* Image Preview */}
            <div>
               {uploadedImage && (
                  <List
                     bordered
                     dataSource={[uploadedImage]} // Use an array with the single uploaded image
                     renderItem={(item) => (
                        <List.Item>
                           <span style={{ color: item.size > 2000000 ? "red" : "black" }}>
                              {item.name}
                           </span>{" "}
                           ({Math.round(item.size / 1024)}KB)
                        </List.Item>
                     )}
                  />
               )}
            </div>
         </div>
      </div>
   );
}

export default Image;
