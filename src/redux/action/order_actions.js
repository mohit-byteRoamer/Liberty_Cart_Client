import reduxConstants from "../constants/reduxConstants";

// Create_New_Order
export const createNewOrderLoad = (payload) => ({
   type: reduxConstants.CREATE_NEW_ORDER_LOAD,
   payload,
});

export const createNewOrderSuccess = (payload) => ({
   type: reduxConstants.CREATE_NEW_ORDER_SUCCESS,
   payload,
});

export const createNewOrderFail = () => ({
   type: reduxConstants.CREATE_NEW_ORDER_FAIL,
});
// ------------------------------------------------------ //
