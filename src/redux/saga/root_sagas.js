import { takeLatest } from "redux-saga/effects";
import reduxConstants from "../constants/reduxConstants";
import { logInSaga, signUpSaga } from "./auth_sagas";
import {
   createProductSaga,
   deleteProductSaga,
   getLatestProductSaga,
   getProductAdminSaga,
   getProductCategorySaga,
   getProductDetailSaga,
   getProductSaga,
   updateProductSaga,
} from "./product_saga";
import { uploadFileSaga } from "./upload_file_saga";
import { deleteCartItemSaga, getCartListSaga, updateCartListSaga } from "./cart_saga";
import { createOrderSaga } from "./order_saga";

export function* rootSaga() {
   yield takeLatest(reduxConstants.SIGNUP_LOAD, signUpSaga);
   yield takeLatest(reduxConstants.LOGIN_LOAD, logInSaga);
   yield takeLatest(reduxConstants.CREATE_PRODUCT_LOAD, createProductSaga);
   yield takeLatest(reduxConstants.GET_PRODUCT_LOAD, getProductSaga);
   yield takeLatest(reduxConstants.GET_PRODUCT_CATEGORY_LOAD, getProductCategorySaga);
   yield takeLatest(reduxConstants.GET_LATEST_PRODUCT_LOAD, getLatestProductSaga);
   yield takeLatest(reduxConstants.GET_PRODUCT_DETAIL_LOAD, getProductDetailSaga);
   yield takeLatest(reduxConstants.UPLOAD_FILE_ACTION_LOAD, uploadFileSaga);
   yield takeLatest(reduxConstants.GET_PRODUCT_ADMIN_LOAD, getProductAdminSaga);
   yield takeLatest(reduxConstants.UPDATE_PRODUCT_LOAD, updateProductSaga);
   yield takeLatest(reduxConstants.DELETE_PRODUCT_LOAD, deleteProductSaga);
   yield takeLatest(reduxConstants.UPDATE_CART_LIST_LOAD, updateCartListSaga);
   yield takeLatest(reduxConstants.GET_CART_LIST_LOAD, getCartListSaga);
   yield takeLatest(reduxConstants.DELETE_CART_ITEM_LOAD, deleteCartItemSaga);
   yield takeLatest(reduxConstants.CREATE_ORDER_LOAD, createOrderSaga);
}
