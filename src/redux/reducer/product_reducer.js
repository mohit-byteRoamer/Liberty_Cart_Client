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
   getProductDetailLoader: false,
   productsDetail: {},
   getProductAdminLoader: false,
   adminProducts: [],
   updateProductLoader: false,
   updatedProducts: {},
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
      // ------------------------------------------------------ //
      // Get Products
      case reduxConstants.GET_PRODUCT_LOAD:
         return { ...state, getProductLoader: true };
      case reduxConstants.GET_PRODUCT_SUCCESS:
         return { ...state, getProductLoader: false, products: action.payload };
      case reduxConstants.GET_PRODUCT_FAIL:
         return { ...state, getProductLoader: false };
      // ------------------------------------------------------ //

      // Get Products Category
      case reduxConstants.GET_PRODUCT_CATEGORY_LOAD:
         return { ...state, getProductCategoryLoader: true };
      case reduxConstants.GET_PRODUCT_CATEGORY_SUCCESS:
         return { ...state, getProductCategoryLoader: false, productCategory: action.payload };
      case reduxConstants.GET_PRODUCT_CATEGORY_FAIL:
         return { ...state, getProductCategoryLoader: false };
      // ------------------------------------------------------ //

      // Get Products Category
      case reduxConstants.GET_LATEST_PRODUCT_LOAD:
         return { ...state, getLatestProductLoader: true };
      case reduxConstants.GET_LATEST_PRODUCT_SUCCESS:
         return { ...state, getLatestProductLoader: false, latestProduct: action.payload };
      case reduxConstants.GET_LATEST_PRODUCT_FAIL:
         return { ...state, getLatestProductLoader: false };
      // ------------------------------------------------------ //

      // Get Product Id
      case reduxConstants.GET_PRODUCT_DETAIL_LOAD:
         return { ...state, getProductDetailLoader: true };
      case reduxConstants.GET_PRODUCT_DETAIL_SUCCESS:
         return { ...state, getProductDetailLoader: false, productsDetail: action.payload };
      case reduxConstants.GET_PRODUCT_DETAIL_FAIL:
         return { ...state, getProductDetailLoader: false };
      // ------------------------------------------------------ //

      // Get Admin Products
      case reduxConstants.GET_PRODUCT_ADMIN_LOAD:
         return { ...state, getProductAdminLoader: true, productsDetail: {} };
      case reduxConstants.GET_PRODUCT_ADMIN_SUCCESS:
         return { ...state, getProductAdminLoader: false, adminProducts: action.payload };
      case reduxConstants.GET_PRODUCT_ADMIN_FAIL:
         return { ...state, getProductAdminLoader: false };
      // ------------------------------------------------------ //

      case reduxConstants.UPDATE_PRODUCT_LOAD:
         return { ...state, updateProductLoader: true };
      case reduxConstants.UPDATE_PRODUCT_SUCCESS:
         return { ...state, updateProductLoader: false, updatedProducts: action.payload };
      case reduxConstants.UPDATE_PRODUCT_FAIL:
         return { ...state, updateProductLoader: false };
      // ------------------------------------------------------ //

      // Default Case
      default:
         return state;
   }
}

export default ProductReducer;
