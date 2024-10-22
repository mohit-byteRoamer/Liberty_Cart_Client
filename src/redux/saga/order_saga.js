import { call, put } from "redux-saga/effects";
import { createOrderApi, deleteOrderApi, getAllOrderApi } from "../axios/axios-api";
import toast from "react-hot-toast";
import {
   createOrderFail,
   createOrderSuccess,
   deleteOrderFail,
   deleteOrderSuccess,
   getAllOrderFail,
   getAllOrderSuccess,
} from "../action/order_actions";

// Create Order Saga
export function* createOrderSaga(action) {
   const { navigate } = action.payload;
   try {
      const response = yield call(createOrderApi, action.payload.apiPayload);
      console.log("createNewOrderSaga response:", response);
      const { result, status } = response;
      if (status === 1) {
         yield put(createOrderSuccess(result));
         toast.success(result?.message);
         navigate("/reviewOrder");
      } else {
         yield put(createOrderFail(result));
         toast.error(result?.message || "Failed to create order");
      }
   } catch (error) {
      console.log("Error creating order:", error);

      yield put(createOrderFail(error));
      toast.error("Internal Server Error. Please try again later.");
   }
}
// ------------------------------------------------------------------ //

// Delete Order Saga
export function* deleteOrderSaga(action) {
   console.log("deleteOrderSaga action.payload:", action.payload);
   const { id, deleteOrderFunctionCall } = action.payload;
   try {
      const response = yield call(deleteOrderApi, id);
      console.log("deleteOrderSaga response:", response);
      const { result, status } = response;
      if (status === 1) {
         yield put(deleteOrderSuccess(result));
         toast.success(result?.message);
         yield call(deleteOrderFunctionCall);
      } else {
         yield put(deleteOrderFail(result));
         toast.error(result?.message || "Failed to delete order");
      }
   } catch (error) {
      console.log("Error deleting order:", error);
      yield put(deleteOrderFail(error));
      toast.error("Internal Server Error. Please try again later.");
   }
}

// ------------------------------------------------------------------ //

// Get All Order Saga
export function* getAllOrderSaga() {
   try {
      const response = yield call(getAllOrderApi);
      console.log("getAllOrderSaga response:", response);
      const { result, status } = response;
      if (status === 1) {
         yield put(getAllOrderSuccess(result?.data));
      } else {
         yield put(getAllOrderFail(result));
         console.log("404 bad request");
         toast.error(result?.message || "Failed to Get All Order.");
      }
   } catch (error) {
      console.log("Error Get All Order", error);
      yield put(getAllOrderFail(error));
      toast.error("Internal Server Error. Please try again later.");
   }
}
// ------------------------------------------------------------------ //
