import { call, put } from "redux-saga/effects";
import { createProductApi, getProductApi, getProductCategoryApi } from "../axios/axios-api";
import {
   createProductFail,
   createProductSuccess,
   getProductCategoryFail,
   getProductCategorySuccess,
   getProductFail,
   getProductSuccess,
} from "../action/product_action";
import toast from "react-hot-toast";

export function* createProductSaga(action) {
   try {
      const response = yield call(createProductApi, action.payload);
      const { result, status } = response;
      if (status === 1) {
         yield put(createProductSuccess(result));
         toast.success(result.message);
      } else {
         yield put(createProductFail(result));
         toast.error(result.message);
      }
   } catch (error) {
      yield put(createProductFail(error));
      toast.error("Internal Server Error");
   }
}

export function* getProductSaga() {
   try {
      const response = yield call(getProductApi);
      const { result, status } = response;
      if (status === 1) {
         // const {products, totalPage} = result.data;
         yield put(getProductSuccess(result));
      } else {
         yield put(getProductFail(result.data.message));
      }
   } catch (error) {
      yield put(getProductFail(error));
   }
}

export function* getProductCategorySaga() {
   try {
      const response = yield call(getProductCategoryApi);
      const { result, status } = response || {};
      // console.log("CATEGORY-RESPONSE", response);
      if (status === 1) {
         // console.log("CATEGORY-RESPONSE-SUCCESS", result);
         yield put(getProductCategorySuccess(result.data));
      } else {
         console.log("CATEGORY-RESPONSE-ERROR", result);
         yield put(getProductCategoryFail(result?.message));
      }
   } catch (error) {
      yield put(getProductCategoryFail(error));
   }
}
