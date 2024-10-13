import reduxConstants from "../constants/reduxConstants";

const initialState = {
   updateCartLoader: false,
};

function CartReducer(state = initialState, action) {
   switch (action.type) {
      // Update Cart
      case reduxConstants.UPDATE_CART_LIST_LOAD:
         return { ...state, updateCartLoader: true };

      case reduxConstants.UPDATE_CART_LIST_SUCCESS:
         return { ...state, updateCartLoader: false };

      case reduxConstants.UPDATE_CART_LIST_FAIL:
         return { ...state, updateCartLoader: false };

      // ------------------------------------------------------ //

      // Default Case
      default:
         return state;
   }
}

export default CartReducer;
