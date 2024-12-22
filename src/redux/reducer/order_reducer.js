import reduxConstants from "../constants/reduxConstants";

const initialState = {
   createOrderLoader: false,
   createOrderData: [],
   updateOrderLoader: false,
   updateOrderData: {},
   deleteOrderLoader: false,
   deleteOrderData: {},
   getOrderByIdLoader: false,
   getOrderByIdData: {},
   getAllOrderLoader: false,
   getAllOrderData: [],
};

const OrderReducer = (state = initialState, action) => {
   switch (action.type) {
      // Create_New_Order_Reducer
      case reduxConstants.CREATE_ORDER_LOAD:
         return { ...state, createOrderLoader: true };

      case reduxConstants.CREATE_ORDER_SUCCESS:
         return {
            ...state,
            createOrderLoader: false,
            createOrderData: action.payload,
         };

      case reduxConstants.CREATE_ORDER_FAIL:
         return { ...state, createOrderLoader: false };
      // ------------------------------------------------------ //

      // Update_Order_Reducer
      case reduxConstants.UPDATE_ORDER_LOAD:
         return { ...state, updateOrderLoader: true };

      case reduxConstants.UPDATE_ORDER_SUCCESS:
         return { ...state, updateOrderLoader: false, updateOrderData: action.payload };

      case reduxConstants.UPDATE_ORDER_FAIL:
         return { ...state, updateOrderLoader: false };
      // ------------------------------------------------------ //

      // Delete_Order_Reducer
      case reduxConstants.DELETE_ORDER_LOAD:
         return { ...state, deleteOrderLoader: true };

      case reduxConstants.DELETE_ORDER_SUCCESS:
         return { ...state, deleteOrderLoader: false, deleteOrderData: action.payload };

      case reduxConstants.DELETE_ORDER_FAIL:
         return { ...state, deleteOrderLoader: false };
      // ------------------------------------------------------ //

      // Get_All_Order_Reducer
      case reduxConstants.GET_ORDER_BY_ID_LOAD:
         return { ...state, getOrderByIdLoader: true };

      case reduxConstants.GET_ORDER_BY_ID_SUCCESS:
         return { ...state, getOrderByIdLoader: false, getOrderByIdData: action.payload };

      case reduxConstants.GET_ORDER_BY_ID_FAIL:
         return { ...state, getOrderByIdLoader: false };
      // ------------------------------------------------------ //

      // Get_All_Order_Reducer
      case reduxConstants.GET_ALL_ORDER_LOAD:
         return { ...state, getAllOrderLoader: true };

      case reduxConstants.GET_ALL_ORDER_SUCCESS:
         return { ...state, getAllOrderLoader: false, getAllOrderData: action.payload };

      case reduxConstants.GET_ALL_ORDER_FAIL:
         return { ...state, getAllOrderLoader: false };
      // ------------------------------------------------------ //

      default:
         return state;
   }
};

export default OrderReducer;
