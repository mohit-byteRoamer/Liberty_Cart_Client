import { call, put } from "redux-saga/effects";
import { createNewOrderApi } from "../axios/axios-api";
import { createNewOrderFail, createNewOrderSuccess } from "../action/order_actions";
import toast from "react-hot-toast";

export function* createNewOrderSaga(action) {
   console.log("createNewOrderSaga", action);

   try {
      const response = yield call(createNewOrderApi, action.payload);
      console.log("createNewOrderSaga response:", response);
      const { result, status } = response;
      if (status === 1) {
         yield put(createNewOrderSuccess(result));
         toast.success(result?.message);
      } else {
         yield put(createNewOrderFail());
         toast.error(result?.message);
      }
   } catch (error) {
      yield put(createNewOrderFail(error));
      console.log("Internal Server Error");
   }
}
