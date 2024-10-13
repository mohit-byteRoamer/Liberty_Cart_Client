import { call, put } from "redux-saga/effects";
import { UpdateCartApi } from "../axios/axios-api";
import { updateCartListFail, updateCartListSuccess } from "../action/cart_actions";
import toast from "react-hot-toast";
export function* updateCartListSaga(action) {
   console.log("CART_SAGA", action.payload);
   try {
      const response = yield call(UpdateCartApi, action.payload);
      const { result, status } = response;
      console.log("result", result);
      if (status === 1) {
         yield put(updateCartListSuccess(result));
      } else {
         yield put(updateCartListFail(result));
         toast.error(result?.message);
      }
   } catch (error) {
      yield put(updateCartListFail([]));
      toast.error("Internal Server Error");
   }
}
