import { takeLatest } from "redux-saga/effects";
import reduxConstants from "../constants/reduxConstants";
import { signUpSaga } from "./auth-sagas";

export function* rootSaga() {
  yield takeLatest(reduxConstants.SIGNUP_LOAD, signUpSaga);
  
}