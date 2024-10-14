import { call, put } from "redux-saga/effects";
import { DeleteCartApi, getCartListApi, UpdateCartApi } from "../axios/axios-api";
import {
   deleteCartItemFail,
   deleteCartItemSuccess,
   getCartListFail,
   getCartListLoad,
   getCartListSuccess,
   updateCartListFail,
   updateCartListSuccess,
} from "../action/cart_actions";
import toast from "react-hot-toast";

//Update_Cart_List_Saga
export function* updateCartListSaga(action) {
   console.log("UPDATE_CART_SAGA", action.payload);
   try {
      const response = yield call(UpdateCartApi, action.payload);
      const { result, status } = response;
      console.log("Update_Cart_Saga_Result", result);
      if (status === 1) {
         yield put(updateCartListSuccess(result));
      } else {
         yield put(updateCartListFail(result));
         toast.error(result?.message);
      }
   } catch (error) {
      yield put(updateCartListFail(error));
      toast.error("Internal Server Error");
   }
}
// ------------------------------------------------------------------ //

// Get_Cart_List_Saga
export function* getCartListSaga(action) {
   console.log("GET_CART_SAGA", action.payload);
   try {
      const response = yield call(getCartListApi, action.payload);
      const { result, status } = response;
      console.log("Get_Cart_Saga_Result", response?.result);
      if (status === 1) {
         yield put(getCartListSuccess(result));
      } else {
         yield put(getCartListFail(result));
         toast.error(result?.message);
      }
   } catch (error) {
      yield put(getCartListFail(error));
      toast.error("Internal Server Error");
   }
}
// ------------------------------------------------------------------ //

// Delete_Cart_Item_Saga
export function* deleteCartItemSaga(action) {
   console.log("DELETE_CART_ITEM_SAGA", action.payload);
   try {
      const response = yield call(DeleteCartApi, action.payload);
      const { result, status } = response;
      console.log("Delete_Cart_Item_Saga_Result", result);
      if (status === 1) {
         yield put(deleteCartItemSuccess(result));
         yield put(getCartListLoad(action.payload));
      } else {
         yield put(deleteCartItemFail(result));
         toast.error(result?.message);
      }
   } catch (error) {
      yield put(deleteCartItemFail(error));
      toast.error("Internal Server Error");
   }
}
// ------------------------------------------------------------------ //
