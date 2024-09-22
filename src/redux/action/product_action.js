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

// Get Product
export const getProductLoad = () => {
   return { type: reduxConstants.GET_PRODUCT_LOAD };
};

export const getProductSuccess = (payload) => {
   return { type: reduxConstants.GET_PRODUCT_SUCCESS, payload: payload };
};

export const getProductFail = () => {
   return { type: reduxConstants.GET_PRODUCT_FAIL };
};
