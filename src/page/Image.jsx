import { UploadFileActionLoad } from "../redux/action/upload_file_action";
import { useDispatch } from "react-redux";
import { Upload, Button, message, Spin } from "antd"; // Importing List to display uploaded images
import { UploadOutlined } from "@ant-design/icons"; // Icon for better UI
import { useSelector } from "react-redux";
// import { useState } from "react";

function Image() {
   const dispatch = useDispatch();
   const imageSelector = useSelector((state) => state?.UploadFileReducer);
   console.log("imageSelector", imageSelector);
   const { uploadFile, uploadFileLoader } = imageSelector;
   console.log("uploadFile", uploadFile);
   console.log("uploadFileLoader", uploadFileLoader);

   // const [uploadedImage, setUploadedImage] = useState(null); // State to manage uploaded images

   // IMAGE UPLOAD DISPATCHER
   const fileUploadHandler = (file) => {
      const formData = new FormData();
      formData.append("image", file);
      dispatch(UploadFileActionLoad({ formData }));
   };

   // Validation function
   const validateImage = (file) => {
      if (!file) {
         message.error("Image is required!");
         return false;
      }

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
               loading
               beforeUpload={(file) => {
                  console.log("IMAGE", file);
                  if (validateImage) {
                     fileUploadHandler(file);
                  }
                  return false; // Stops automatic upload by Ant Design
               }}
               showUploadList={false} // Hides the default upload list
            >
               <Button
                  className="py-[16%] bg-[#2b7cff] text-white"
                  icon={<UploadOutlined />}
                  loading={uploadFileLoader}
                  disabled={uploadFileLoader}>
                  {uploadFileLoader ? <Spin size="small" /> : "Select Image"}
               </Button>
            </Upload>
            {/* Image Preview */}
            <div>
               {uploadFile && (
                  <div>
                     {uploadFile && (
                        <img
                           src={uploadFile}
                           alt="Uploaded"
                           style={{ maxWidth: "100px", maxHeight: "100px" }}
                        />
                     )}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default Image;
