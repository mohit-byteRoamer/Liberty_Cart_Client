import { call, put } from "redux-saga/effects";
import {
   signUpActionsFail,
   signUpActionsSuccess,
   logInActionsSuccess,
   logInActionsFail,
} from "../action/auth-actions";
import { signUpApi, logInApi } from "../axios/axios-api";
import toast from "react-hot-toast";

export function* signUpSaga(action) {
   try {
      const response = yield call(signUpApi, action.payload);
      const { result, status } = response;
      console.log(response, "SIGN_UP_RESULT");

      if (status === 1) {
         yield put(signUpActionsSuccess(result));
         toast.success(result.msg);
      } else {
         yield put(signUpActionsFail(result));
         toast.error(result.msg)
      }
   } catch (error) {
      console.log("SignUp Error:", error);
      yield put(signUpActionsFail(error));
   }
}

export function* logInSaga(action) {
   try {
      let response = yield call(logInApi, action.payload);
      let { result, status } = response;
      console.log("LOG_IN_RESULT:", result.msg, "LOG_IN_Status:", status);

      if (status === 1) {
         yield put(logInActionsSuccess(result));
         toast.success(result.msg);
      } else {
         yield put(logInActionsFail(result));
         toast.error(result.msg);
      }
   } catch (error) {
      console.log("LogIn Error:", error);
      yield put(logInActionsFail(error));
   }
}
