import reduxConstants from "../constants/reduxConstants";

const initialState = {
   updateCartLoader: false,
   getCartLoader: false,
   cartData: [],
   deleteCartItemLoader: false,
   deleteCartItem: {},
   quantity: 1,
   increaseQuantity: false,
   decreaseQuantity: false,
};

function CartReducer(state = initialState, action) {
   switch (action.type) {
      // Update_Cart_List
      case reduxConstants.UPDATE_CART_LIST_LOAD:
         return { ...state, updateCartLoader: true };

      case reduxConstants.UPDATE_CART_LIST_SUCCESS:
         return { ...state, updateCartLoader: false };

      case reduxConstants.UPDATE_CART_LIST_FAIL:
         return { ...state, updateCartLoader: false };
      // ------------------------------------------------------ //

      // Get_Cart_List
      case reduxConstants.GET_CART_LIST_LOAD:
         return { ...state, getCartLoader: true };

      case reduxConstants.GET_CART_LIST_SUCCESS:
         return { ...state, getCartLoader: false, cartData: action.payload };

      case reduxConstants.GET_CART_LIST_FAIL:
         return { ...state, getCartLoader: false };
      // ------------------------------------------------------ //

      // Delete_Cart_Item
      case reduxConstants.DELETE_CART_ITEM_LOAD:
         return { ...state, deleteCartItemLoader: true };

      case reduxConstants.DELETE_CART_ITEM_SUCCESS:
         return {
            ...state,
            deleteCartItemLoader: false,
            deleteCartItem: action.payload,
         };

      case reduxConstants.DELETE_CART_ITEM_FAIL:
         return { ...state, deleteCartItemLoader: false };
      // ------------------------------------------------------ //

      // Default Case
      default:
         return state;
   }
}

export default CartReducer;
