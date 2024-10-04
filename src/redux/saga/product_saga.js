import { call, put } from "redux-saga/effects";
import {
   createProductApi,
   getLatestProductApi,
   getProductApi,
   getProductCategoryApi,
   getProductDetailApi,
   updateProductApi,
} from "../axios/axios-api";
import {
   createProductFail,
   createProductSuccess,
   getAdminProductFail,
   getAdminProductSuccess,
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

// CALL CREATE PRODUCTS SAGA FUNCTION BY ROOT_SAGA
export function* createProductSaga(action) {
   try {
      const { navigate } = action.payload;
      const response = yield call(createProductApi, action.payload.apiPayload);
      const { result, status } = response;
      if (status === 1) {
         yield put(createProductSuccess(result));
         toast.success(result.message);
         navigate("/");
      } else {
         yield put(createProductFail(result));
         toast.error(result.message);
      }
   } catch (error) {
      yield put(createProductFail(error));
      toast.error("Internal Server Error");
   }
}

// CALL GET PRODUCTS SAGA FUNCTION BY ROOT_SAGA
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

// CALL GET PRODUCTS CATEGORY SAGA FUNCTION BY ROOT_SAGA
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

// CALL GET LATEST PRODUCTS SAGA FUNCTION BY ROOT_SAGA
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

// CALL GET PRODUCTS DETAIL SAGA FUNCTION BY ROOT_SAGA
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

// CALL GET PRODUCTS ADMIN SAGA FUNCTION BY ROOT_SAGA
export function* getProductAdminSaga() {
   try {
      const response = yield call(getProductApi);
      const { result, status } = response || {};
      if (status === 1) {
         yield put(getAdminProductSuccess(result.data));
      } else {
         yield put(getAdminProductFail(result));
         toast.error(result.message);
      }
   } catch (error) {
      yield put(getAdminProductFail(error));
      toast.error("Internal Server Error");
   }
}

// CALL UPDATE PRODUCTS  SAGA FUNCTION BY ROOT_SAGA
export function* updateProductSaga(action) {
   console.log("SAGA_ACTION", action);
   try {
      const response = yield call(updateProductApi, action.id);
      console.log("UPDATE_RESPONSE", response);

      const { result, status } = response;
      if (status === 1) {
         console.log("RESULT", result);
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
