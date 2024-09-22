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
      if (status === 1) {
         console.log("SignUp Success:", result);
         yield put(signUpActionsSuccess(result));
         toast.success(result.message);
      } else {
         yield put(signUpActionsFail(result));
         toast.error(result.message);
      }
   } catch (error) {
      console.log("SignUp Error:", error);
      yield put(signUpActionsFail(error));
      toast.error("Internal Server Error");
   }
}

export function* logInSaga(action) {
   try {
      let response = yield call(logInApi, action.payload);
      console.log("Login response :", response);
      
      let { result, status } = response;
      if (status === 1) {
         localStorage.setItem("token", result.data.accessToken);
         yield put(logInActionsSuccess(result));
         toast.success(result.message);
      } else {
         yield put(logInActionsFail(result));
         toast.error(result.message || "Internal Server Error");
      }
   } catch (error) {
      console.log("LogIn Error:", error);
      yield put(logInActionsFail(error));
      toast.error("Internal Server Error");
   }
}