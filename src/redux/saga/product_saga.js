import { call, put } from "redux-saga/effects";
import { createProductApi, getProductApi } from "../axios/axios-api";
import {
   createProductFail,
   createProductSuccess,
   getProductFail,
   getProductSuccess,
} from "../action/product_action";
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

export function* getProductSaga() {
   try {
      const response = yield call(getProductApi);
      console.log("RESPONSE", response);
      const { result, status } = response;
      if (status === 1) {
         // const {products, totalPage} = result.data;
         yield put(getProductSuccess(result));
      } else {
         yield put(getProductFail(result.data.message));
      }
   } catch (error) {
      console.log("Get Product Error:", error);
      yield put(getProductFail(error));
   }
}