import reduxConstants from "../constants/reduxConstants";

const initialState = {
   createProductLoader: false,
   category: [],
   getProductLoader: false,
   products: [],
   getProductCategoryLoader: false,
   productCategory: [],
   getLatestProductLoader: false,
   latestProduct: [],
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

      // Get Products Category
      case reduxConstants.GET_PRODUCT_CATEGORY_LOAD:
         return { ...state, getProductCategoryLoader: true };
      case reduxConstants.GET_PRODUCT_CATEGORY_SUCCESS:
         return { ...state, getProductCategoryLoader: false, productCategory: action.payload };
      case reduxConstants.GET_PRODUCT_CATEGORY_FAIL:
         return { ...state, getProductCategoryLoader: false };

      // Get Products Category
      case reduxConstants.GET_LATEST_PRODUCT_LOAD:
         return { ...state, getLatestProductLoader: true };
      case reduxConstants.GET_LATEST_PRODUCT_SUCCESS:
         return { ...state, getLatestProductLoader: false, latestProduct: action.payload };
      case reduxConstants.GET_LATEST_PRODUCT_FAIL:
         return { ...state, getLatestProductLoader: false };

      // Default Case
      default:
         return state;
   }
}

export default ProductReducer;
