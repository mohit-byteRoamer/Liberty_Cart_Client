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
         yield put(signUpActionsSuccess(result));
         toast.success(result?.message);
      } else {
         yield put(signUpActionsFail(result));
         toast.error(result?.message);
      }
   } catch (error) {
      yield put(signUpActionsFail(error));
      toast.error("Internal Server Error");
   }
}

export function* logInSaga(action) {
   try {
      const { navigate } = action.payload;
      let response = yield call(logInApi, action.payload);

      let { result, status } = response;
      console.log("LOGIN_RESULT", result.data.user); 

      if (status === 1) {
         localStorage.setItem("token", result?.data?.accessToken);
         localStorage.setItem("user", JSON.stringify(result?.data?.user)); 
         yield put(logInActionsSuccess(result));
         navigate("/"); // Redirect to home
         toast.success(result.message);
      } else {
         yield put(logInActionsFail(result));
         toast.error(result.message || "Internal Server Error");
      }
   } catch (error) {
      yield put(logInActionsFail(error));
      toast.error("Internal Server Error");
   }
}