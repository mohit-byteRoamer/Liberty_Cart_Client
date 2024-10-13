import reduxConstants from "../constants/reduxConstants";

export const updateCartListLoad = (payload) => ({
   type: reduxConstants.UPDATE_CART_LIST_LOAD,
   payload,
});

export const updateCartListSuccess = () => ({
   type: reduxConstants.UPDATE_CART_LIST_SUCCESS,
});

export const updateCartListFail = () => ({
   type: reduxConstants.UPDATE_CART_LIST_FAIL,
});
