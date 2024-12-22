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

// Update_Order_Action
export const updateOrderLoad = (payload) => ({
   type: reduxConstants.UPDATE_ORDER_LOAD,
   payload,
});

export const updateOrderSuccess = (payload) => ({
   type: reduxConstants.UPDATE_ORDER_SUCCESS,
   payload,
});

export const updateOrderFail = () => ({
   type: reduxConstants.UPDATE_ORDER_FAIL,
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

// Get_Order_by_Id_Action
export const getOrderByIdLoad = (payload) => ({
   type: reduxConstants.GET_ORDER_BY_ID_LOAD,
   payload,
});

export const getOrderByIdSuccess = (payload) => ({
   type: reduxConstants.GET_ORDER_BY_ID_SUCCESS,
   payload,
});

export const getOrderByIdFail = () => ({
   type: reduxConstants.GET_ORDER_BY_ID_FAIL,
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
