import reduxConstants from "../constants/reduxConstants";

const initialState = {
   uploadFile: null,
   uploadFileLoader: false,
};

// UPLOAD_FILE_REDUCER
function UploadFileReducer(state = initialState, action) {
   switch (action.type) {
      case reduxConstants.UPLOAD_FILE_ACTION_LOAD:
         return { ...state, uploadFileLoader: true };
      case reduxConstants.UPLOAD_FILE_ACTION_SUCCESS:
         return { ...state, uploadFileLoader: false, uploadFile: action.payload };
      case reduxConstants.UPLOAD_FILE_ACTION_FAIL:
         return { ...state, uploadFileLoader: false };
      default:
         return state;
   }
}

export default UploadFileReducer;
