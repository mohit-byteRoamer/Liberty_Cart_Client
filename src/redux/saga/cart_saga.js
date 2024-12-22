import { call, put } from "redux-saga/effects";
import { DeleteCartApi, getCartListApi, UpdateCartApi } from "../axios/axios-api";
import {
   deleteCartItemFail,
   deleteCartItemSuccess,
   getCartListFail,
   getCartListSuccess,
   updateCartListFail,
   updateCartListSuccess,
} from "../action/cart_actions";
import toast from "react-hot-toast";

//Update_Cart_List_Saga
export function* updateCartListSaga(action) {
   const { removeProductSuccessFunctionCall } = action.payload;
   try {
      const response = yield call(UpdateCartApi, action.payload.apiPayload);
      const { result, status } = response;

      if (status === 1) {
         yield put(updateCartListSuccess(result));
         if (removeProductSuccessFunctionCall) {
            yield call(removeProductSuccessFunctionCall);
         }
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
export function* getCartListSaga() {
   try {
      const response = yield call(getCartListApi);
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
   const { removeProductSuccessFunctionCall } = action.payload;
   try {
      const response = yield call(DeleteCartApi, action.payload.id);
      const { result, status } = response;
      if (status === 1) {
         yield put(deleteCartItemSuccess(result));
         yield call(removeProductSuccessFunctionCall);
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

// // Increase_Quantity_Saga
// export function* increaseQuantitySaga(action) {
//    console.log("Increase_Quantity_Saga", action.payload);
//    try {
//       const response = yield call(UpdateCartApi, action.payload);
//       const { result, status } = response;
//       console.log("Increase_Quantity_Saga_Result", result);
//       if (status === 1) {
//          yield put(increaseQuantitySuccess(result));
//       } else {
//          yield put(increaseQuantityFail(result));
//          toast.error(result?.message);
//       }
//    } catch (error) {
//       yield put(increaseQuantityFail(error));
//       toast.error("Internal Server Error");
//    }
// }
// ------------------------------------------------------------------ //
