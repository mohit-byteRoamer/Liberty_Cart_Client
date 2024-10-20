import reduxConstants from "../constants/reduxConstants";

const initialState = {
   createOrderLoader: false,
   createOrderData: [],
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

      default:
         return state;
   }
};

export default OrderReducer;
