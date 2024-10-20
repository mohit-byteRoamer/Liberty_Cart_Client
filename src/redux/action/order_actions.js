import reduxConstants from "../constants/reduxConstants";

// Create_New_Order
export const createOrderLoad = (payload) => ({
   type: reduxConstants.CREATE_ORDER_LOAD,
   payload,
});

export const createOrderSuccess = (payload) => ({
   type: reduxConstants.CREATE_ORDER_SUCCESS,
   payload,
});

export const createOrderFail = () => ({
   type: reduxConstants.CREATE_ORDER_FAIL,
});
// ------------------------------------------------------ //