import reduxConstants from "../constants/reduxConstants";

export const createProductLoad = (payload) => {
   return { type: reduxConstants.CREATE_PRODUCT_LOAD, payload };
};

export const createProductSuccess = (payload) => {
   return { type: reduxConstants.CREATE_PRODUCT_SUCCESS, payload: payload };
};

export const createProductFail = () => {
   return { type: reduxConstants.CREATE_PRODUCT_FAIL };
};
