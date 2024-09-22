import reduxConstants from "../constants/reduxConstants";

const initialState = {
   createProductLoader: false,
   category: [],
   getProductLoader: false,
   products: [],
};

function ProductReducer(state = initialState, action) {
   switch (action.type) {
      // Create Products
      case reduxConstants.CREATE_PRODUCT_LOAD:
         return { ...state, createProductLoader: true };
      case reduxConstants.CREATE_PRODUCT_SUCCESS:
         return { ...state, createProductLoader: false, category: action.payload };
      case reduxConstants.CREATE_PRODUCT_FAIL:
         return { ...state, createProductLoader: false };

      // Get Products
      case reduxConstants.GET_PRODUCT_LOAD:
         return { ...state, getProductLoader: true };
      case reduxConstants.GET_PRODUCT_SUCCESS:
         return { ...state, getProductLoader: false, products: action.payload };
      case reduxConstants.GET_PRODUCT_FAIL:
         return { ...state, getProductLoader: false };
      default:
         return state;
   }
}

export default ProductReducer;
