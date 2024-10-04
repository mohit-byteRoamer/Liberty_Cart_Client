import reduxConstants from "../constants/reduxConstants";

// Create Product
export const createProductLoad = (payload) => {
   return { type: reduxConstants.CREATE_PRODUCT_LOAD, payload };
};

export const createProductSuccess = (payload) => {
   return { type: reduxConstants.CREATE_PRODUCT_SUCCESS, payload: payload };
};

export const createProductFail = () => {
   return { type: reduxConstants.CREATE_PRODUCT_FAIL };
};
// ------------------------------------------------------ //

// Get Product
export const getProductLoad = (payload) => {
   return { type: reduxConstants.GET_PRODUCT_LOAD, payload };
};

export const getProductSuccess = (payload) => {
   return { type: reduxConstants.GET_PRODUCT_SUCCESS, payload: payload };
};

export const getProductFail = () => {
   return { type: reduxConstants.GET_PRODUCT_FAIL };
};
// ------------------------------------------------------ //

// Get Product Category
export const getProductCategoryLoad = () => {
   return { type: reduxConstants.GET_PRODUCT_CATEGORY_LOAD };
};

export const getProductCategorySuccess = (payload) => {
   return { type: reduxConstants.GET_PRODUCT_CATEGORY_SUCCESS, payload: payload };
};

export const getProductCategoryFail = () => {
   return { type: reduxConstants.GET_PRODUCT_CATEGORY_FAIL };
};
// ------------------------------------------------------ //


// Latest Product
export const getLatestProductLoad = () => {
   return { type: reduxConstants.GET_LATEST_PRODUCT_LOAD };
};
export const getLatestProductSuccess = (payload) => {
   return { type: reduxConstants.GET_LATEST_PRODUCT_SUCCESS, payload: payload };
};
export const getLatestProductFail = () => {
   return { type: reduxConstants.GET_LATEST_PRODUCT_FAIL };
};
// ------------------------------------------------------ //


// Product Id
export const getProductDetailLoad = (id) => {
   console.log("ACTION PAYLOAD", id);
   return { type: reduxConstants.GET_PRODUCT_DETAIL_LOAD, Id: id };
};
export const getProductDetailSuccess = (payload) => {
   return { type: reduxConstants.GET_PRODUCT_DETAIL_SUCCESS, payload };
};
export const getProductDetailFail = () => {
   return { type: reduxConstants.GET_PRODUCT_DETAIL_FAIL };
};
// ------------------------------------------------------ //

// Get Admin Products
export const getAdminProductLoad = () => {
   return { type: reduxConstants.GET_PRODUCT_ADMIN_LOAD };
};
export const getAdminProductSuccess = (payload) => {
   return { type: reduxConstants.GET_PRODUCT_ADMIN_SUCCESS, payload };
};
export const getAdminProductFail = () => {
   return { type: reduxConstants.GET_PRODUCT_ADMIN_FAIL };
};
// ------------------------------------------------------ //

export const updateProductLoad = (payload) => {
   return {type: reduxConstants.UPDATE_PRODUCT_LOAD,payload}
}
export const updateProductSuccess = (payload) => {
   return {type: reduxConstants.UPDATE_PRODUCT_SUCCESS, payload}
}
export const updateProductFail = () => {
   return {type: reduxConstants.UPDATE_PRODUCT_FAIL}
}
// ------------------------------------------------------ //
