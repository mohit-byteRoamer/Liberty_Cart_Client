import { takeLatest } from "redux-saga/effects";
import reduxContacts from "../redux-contants";
import { signUpSaga } from "./auth-sagas";

export function* rootSaga() {
  yield takeLatest(reduxContacts.SIGNUP_LOAD, signUpSaga);
}
