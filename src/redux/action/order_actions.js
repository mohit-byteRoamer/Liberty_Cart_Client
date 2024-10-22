import reduxConstants from "../constants/reduxConstants";

// Create_New_Order_Action
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

// Delete_Order_Action
export const deleteOrderLoad = (payload) => ({
   type: reduxConstants.DELETE_ORDER_LOAD,
   payload,
});

export const deleteOrderSuccess = (payload) => ({
   type: reduxConstants.DELETE_ORDER_SUCCESS,
   payload,
});

export const deleteOrderFail = () => ({
   type: reduxConstants.DELETE_ORDER_FAIL,
});
// ------------------------------------------------------ //

// Get_All_Order_Action
export const getAllOrderLoad = () => ({
   type: reduxConstants.GET_ALL_ORDER_LOAD,
});

export const getAllOrderSuccess = (payload) => ({
   type: reduxConstants.GET_ALL_ORDER_SUCCESS,
   payload,
});

export const getAllOrderFail = () => ({
   type: reduxConstants.GET_ALL_ORDER_FAIL,
});
// ------------------------------------------------------ //
