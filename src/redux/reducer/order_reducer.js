import reduxConstants from "../constants/reduxConstants";

const initialState = {
   createNewOrderLoader: false,
};

const OrderReducer = (state = initialState, action) => {
   switch (action.type) {
      // Create_New_Order_Reducer
      case reduxConstants.CREATE_NEW_ORDER_LOAD:
         return { ...state, createNewOrderLoader: true };

      case reduxConstants.CREATE_NEW_ORDER_SUCCESS:
         return { ...state, createNewOrderLoader: false };

      case reduxConstants.CREATE_NEW_ORDER_FAIL:
         return { ...state, createNewOrderLoader: false };
      // ------------------------------------------------------ //

      default:
         return state;
   }
};

export default OrderReducer;
