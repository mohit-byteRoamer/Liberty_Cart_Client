import { UploadFileActionLoad } from "../redux/action/upload_file_action";
import { useDispatch } from "react-redux";
import { Upload, Button, message } from "antd"; // Importing Button from Ant Design
import { UploadOutlined } from "@ant-design/icons"; // Icon for better UI

function Image() {
   const dispatch = useDispatch();

   // IMAGE UPLOAD DISPATCHER
   const fileUploadHandler = (file) => {
      const formData = new FormData();
      formData.append("image", file);
      dispatch(UploadFileActionLoad({ formData }));
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
            <Button icon={<UploadOutlined />}>Select Image</Button>
         </Upload>
      </div>
   );
}

export default Image;
