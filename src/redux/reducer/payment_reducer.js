import reduxConstants from "../constants/reduxConstants";

const initialState = {
   createPaymentLoader: false,
   createPaymentData: "",
};

function PaymentReducer(state = initialState, action) {
   switch (action.type) {
      case reduxConstants.CREATE_PAYMENT_LOAD:
         return { ...state, createPaymentLoader: true };
      case reduxConstants.CREATE_PAYMENT_SUCCESS:
         return { ...state, createPaymentLoader: false, createPaymentData: action.data };
      case reduxConstants.CREATE_PAYMENT_FAIL:
         return { ...state, createPaymentLoader: false };
      default:
         return state;
   }
}

export default PaymentReducer;
