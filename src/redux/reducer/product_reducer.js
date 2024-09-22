import reduxConstants from "../constants/reduxConstants";

const initialState = {
   createProductLoader: false,
   category: [],
   error: null,
};

function ProductReducer(state = initialState, action) {
   switch (action.type) {
      case reduxConstants.CREATE_PRODUCT_LOAD:
         return { ...state, createProductLoader: true };
      case reduxConstants.CREATE_PRODUCT_SUCCESS:
         return { ...state, createProductLoader: false, category: action.payload };
      case reduxConstants.CREATE_PRODUCT_FAIL:
         return { ...state, createProductLoader: false };
      default:
         return state;
   }
}

export default ProductReducer;
