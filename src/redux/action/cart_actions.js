import reduxConstants from "../constants/reduxConstants";

// Update Cart List
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
// ------------------------------------------------------ //

// Get Cart List
export const getCartListLoad = () => ({
   type: reduxConstants.GET_CART_LIST_LOAD,
});

export const getCartListSuccess = (payload) => ({
   type: reduxConstants.GET_CART_LIST_SUCCESS,
   payload,
});

export const getCartListFail = () => ({
   type: reduxConstants.GET_CART_LIST_FAIL,
});
// ------------------------------------------------------ //

// Delete Cart Item
export const deleteCartItemLoad = (payload) => ({
   type: reduxConstants.DELETE_CART_ITEM_LOAD,
   payload,
});

export const deleteCartItemSuccess = (payload) => ({
   type: reduxConstants.DELETE_CART_ITEM_SUCCESS, 
   payload,
});

export const deleteCartItemFail = () => ({
   type: reduxConstants.DELETE_CART_ITEM_FAIL,
});
// ------------------------------------------------------ //
