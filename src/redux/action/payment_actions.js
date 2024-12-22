import reduxConstants from "../constants/reduxConstants";

export const createPaymentLoadAction = (payload) => {
   return {
      type: reduxConstants.CREATE_PAYMENT_LOAD,
      payload,
   };
};

export const createPaymentSuccessAction = (payload) => {
   return {
      type: reduxConstants.CREATE_PAYMENT_SUCCESS,
      payload,
   };
};

export const createPaymentFailAction = () => {
   return {
      type: reduxConstants.CREATE_PAYMENT_FAIL,
   };
};
