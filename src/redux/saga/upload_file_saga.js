import { call, put } from "redux-saga/effects";
import { UploadFileActionFail, UploadFileActionSuccess } from "../action/upload_file_action";
import { uploadFileApi } from "../axios/axios-api";
import toast from "react-hot-toast";

export function* uploadFileSaga(action) {
   try {
      const response = yield call(uploadFileApi, action.payload.formData);
      const { status, result } = response;
      console.log("UPLOAD_FILE_RESULT", result);
      if (status === 1) {
         yield put(UploadFileActionSuccess(result?.imageUrl));
      } else {
         yield put(UploadFileActionFail(result?.message));
         toast.error(result?.message);
      }
   } catch (error) {
      yield put(UploadFileActionFail(error));
      toast.error("Internal server error");
   }
}
