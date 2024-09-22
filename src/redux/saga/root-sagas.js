import { takeLatest } from "redux-saga/effects";
import reduxConstants from "../constants/reduxConstants";
import { logInSaga, signUpSaga } from "./auth-sagas";
import { createProductSaga } from "./product_saga";

export function* rootSaga() {
  yield takeLatest(reduxConstants.SIGNUP_LOAD, signUpSaga);
  yield takeLatest(reduxConstants.LOGIN_LOAD, logInSaga)
  yield takeLatest(reduxConstants.CREATE_PRODUCT_LOAD, createProductSaga)
}