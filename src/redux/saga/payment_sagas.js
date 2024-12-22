import toast from "react-hot-toast";
import { createPaymentFailAction } from "../action/payment_actions";
import { createPaymentApi } from "../axios/axios-api";
import { call, put } from "redux-saga/effects";

export function* CreatePaymentSaga(action) {
   // console.log("Create_Payment_payload", action.payload)
   const { amount, navigate } = action.payload;
   try {
      const response = yield call(createPaymentApi, { amount: amount });
      const { status, result } = response;
      if (status === 1) {
         // yield put(createPaymentSuccessAction(result.data.clientSecret.client_secret));
         navigate("/paymentInfo", {
            state: { paymentSuccessString: result.data.clientSecret.client_secret },
         });
         console.log("navigate");
         toast.success(result.message);
      } else {
         yield put(createPaymentFailAction(result));
         toast.error(result.message);
      }
   } catch (error) {
      console.log("Create_Payment_error", error);
      toast.error("Internal Server Error. Please try again later. ");
      yield put(createPaymentFailAction(error));
   }
}
