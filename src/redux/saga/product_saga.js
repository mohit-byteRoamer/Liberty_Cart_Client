import { call, put } from "redux-saga/effects";
import {
   createProductApi,
   getLatestProductApi,
   getProductApi,
   getProductCategoryApi,
   getProductDetailApi,
} from "../axios/axios-api";
import {
   createProductFail,
   createProductSuccess,
   getLatestProductFail,
   getLatestProductSuccess,
   getProductCategoryFail,
   getProductCategorySuccess,
   getProductDetailFail,
   getProductDetailSuccess,
   getProductFail,
   getProductSuccess,
} from "../action/product_action";
import toast from "react-hot-toast";

// CALL CREATE PRODUCT SAGA FUNCTION BY ROOT_SAGA
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

// CALL GET PRODUCT SAGA FUNCTION BY ROOT_SAGA
export function* getProductSaga() {
   try {
      const response = yield call(getProductApi);
      const { result, status } = response || {};
      if (status === 1) {
         yield put(getProductSuccess(result));
      } else {
         yield put(getProductFail(result));
         toast.error(result.message);
      }
   } catch (error) {
      yield put(getProductFail(error));
      toast.error("Internal Server Error");
   }
}

// CALL GET PRODUCT CATEGORY SAGA FUNCTION BY ROOT_SAGA
export function* getProductCategorySaga() {
   try {
      const response = yield call(getProductCategoryApi);
      const { result, status } = response || {};
      if (status === 1) {
         yield put(getProductCategorySuccess(result?.data));
      } else {
         yield put(getProductCategoryFail(result?.data));
         toast.error(result?.message);
      }
   } catch (error) {
      yield put(getProductCategoryFail(error));
      toast.error("Internal Server Error");
   }
}

// CALL GET LATEST PRODUCT SAGA FUNCTION BY ROOT_SAGA
export function* getLatestProductSaga() {
   try {
      const response = yield call(getLatestProductApi);
      const { result, status } = response || {};
      if (status === 1) {
         yield put(getLatestProductSuccess(result?.data));
      } else {
         yield put(getLatestProductFail(result));
         toast.error(result?.message || "Something went wrong");
      }
   } catch (error) {
      yield put(getLatestProductFail(error));
      toast.error("Internal Server Error");
   }
}

// CALL GET PRODUCT DETAIL SAGA FUNCTION BY ROOT_SAGA
export function* getProductDetailSaga(action) {
   try {
      const response = yield call(getProductDetailApi, action.Id);
      const { result, status } = response;
      if (status === 1) {
         yield put(getProductDetailSuccess(result?.data));
      } else {
         yield put(getProductDetailFail(result));
         toast.error(result?.message);
      }
   } catch (error) {
      yield put(getProductFail(error));
      toast.error("Internal Server Error");
   }
}
