import { call, put } from "redux-saga/effects";
import { createOrderApi, getAllOrderApi } from "../axios/axios-api";
import toast from "react-hot-toast";
import {
   createOrderFail,
   createOrderSuccess,
   getAllOrderFail,
   getAllOrderSuccess,
} from "../action/order_actions";

export function* createOrderSaga(action) {
   console.log("createNewOrderSaga", action);
   console.log("createNewOrderSaga (payload)", action.payload.apiPayload);
   try {
      const response = yield call(createOrderApi, action.payload.apiPayload);
      console.log("createNewOrderSaga response:", response);
      const { result, status } = response;
      if (status === 1) {
         yield put(createOrderSuccess(result));
         toast.success(result?.message);
      } else {
         yield put(createOrderFail(result));
         console.log("404 bad request");
         toast.error(result?.message);
      }
   } catch (error) {
      yield put(createOrderFail(error));
      console.log("Internal Server Error");
   }
}

export function* getAllOrderSaga() {
   try {
      const response = yield call(getAllOrderApi);
      console.log("getAllOrderSaga response:", response);
      const { result, status } = response;
      if (status === 1) {
         yield put(getAllOrderSuccess(result?.data));
         toast.success(result?.message);
      } else {
         yield put(getAllOrderFail(result));
         console.log("404 bad request");
         toast.error(result?.message);
      }
   } catch (error) {
      yield put(getAllOrderFail(error));
      console.log("Internal Server Error");
   }
}
