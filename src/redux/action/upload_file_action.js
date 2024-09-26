import reduxConstants from "../constants/reduxConstants";

export const UploadFileActionLoad = (payload) => {
   return { type: reduxConstants.UPLOAD_FILE_ACTION_LOAD, payload };
};

export const UploadFileActionSuccess = (payload) => {
   return { type: reduxConstants.UPLOAD_FILE_ACTION_SUCCESS, payload };
};

export const UploadFileActionFail = () => {
   return { type: reduxConstants.UPLOAD_FILE_ACTION_FAIL };
};