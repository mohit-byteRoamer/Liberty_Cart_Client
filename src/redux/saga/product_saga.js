import { call, put } from "redux-saga/effects";
import { createProductApi } from "../axios/axios-api";
import { createProductFail, createProductSuccess } from "../action/product_action";
import toast from "react-hot-toast";

export function* createProductSaga(action) {
   try {
      const response = yield call(createProductApi, action.payload);
      const { result, status } = response;
      if (status === 1) {
         console.log("Create Product Success:", result);
         yield put(createProductSuccess(result));
         toast.success(result.message);
      } else {
         yield put(createProductFail(result));
         toast.error(result.message);
      }
   } catch (error) {
      console.log("Get Product Error:", error);
      yield put(createProductFail(error));
      toast.error("Internal Server Error");
   }
}
