import reduxConstants from "../constants/reduxConstants";

const initialState = {
   signUpLoader: false,
   loginLoader: false,
   user: null,
   
};

function AuthReducer(state = initialState, action) {
   switch (action.type) {
      case reduxConstants.SIGNUP_LOAD:
         return { ...state, signUpLoader: true };
      case reduxConstants.SIGNUP_SUCCESS:
         return { ...state, signUpLoader: false, user: action.payload };
      case reduxConstants.SIGNUP_FAIL:
         return { ...state, signUpLoader: false, user: null };
      case reduxConstants.LOGIN_LOAD:
         return { ...state, loginLoader: true };
      case reduxConstants.LOGIN_SUCCESS:
         return { ...state, loginLoader: false, user: action.payload };
      case reduxConstants.LOGIN_FAIL:
         return { ...state, loginLoader: false, user: null };
      default:
         return state;
   }
}

export default AuthReducer;
