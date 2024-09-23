import { takeLatest } from "redux-saga/effects";
import reduxConstants from "../constants/reduxConstants";
import { logInSaga, signUpSaga } from "./auth-sagas";
import { createProductSaga, getLatestProductSaga, getProductCategorySaga, getProductSaga } from "./product_saga";

export function* rootSaga() {
   yield takeLatest(reduxConstants.SIGNUP_LOAD, signUpSaga);
   yield takeLatest(reduxConstants.LOGIN_LOAD, logInSaga);
   yield takeLatest(reduxConstants.CREATE_PRODUCT_LOAD, createProductSaga);
   yield takeLatest(reduxConstants.GET_PRODUCT_LOAD, getProductSaga);
   yield takeLatest(reduxConstants.GET_PRODUCT_CATEGORY_LOAD, getProductCategorySaga);
   yield takeLatest(reduxConstants.GET_LATEST_PRODUCT_LOAD, getLatestProductSaga);
}
