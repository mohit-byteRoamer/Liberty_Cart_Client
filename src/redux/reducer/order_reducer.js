import reduxConstants from "../constants/reduxConstants";

const initialState = {
   createOrderLoader: false,
   createOrderData: [],
   getAllOrderLoader: false,
   getAllOrderData: [],
};

const OrderReducer = (state = initialState, action) => {
   switch (action.type) {
      // Create_New_Order_Reducer
      case reduxConstants.CREATE_ORDER_LOAD:
         return { ...state, createOrderLoader: true };

      case reduxConstants.CREATE_ORDER_SUCCESS:
         return { ...state, createOrderLoader: false, createOrderData: action.payload };

      case reduxConstants.CREATE_ORDER_FAIL:
         return { ...state, createOrderLoader: false };
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
