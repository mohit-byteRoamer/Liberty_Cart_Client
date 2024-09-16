import { call, put } from "redux-saga/effects";
import {
   signUpActionsFail,
   signUpActionsSuccess,
   logInActionsSuccess,
   logInActionsFail,
} from "../action/auth-actions";
import { signUpApi } from "../axios/axios-api";
import { logInApi } from "../axios/axios-api";

export function* signUpSaga(action) {
   try {
      let response = yield call(signUpApi, action.payload);
      let { result, status } = response;
      console.log(response, "SIGN_UP_RESULT");

      if (status === 1) {
         yield put(signUpActionsSuccess(result));
      } else {
         yield put(signUpActionsFail(result));
      }
   } catch (error) {
      yield put(signUpActionsFail());
   }
}

export function* logInSaga(action) {
  try {
    let response = yield call(logInApi, action.payload);
  } catch{}
}
