import reduxConstants from "../constants/reduxConstants";

const initialState = {
  signUpLoad: false,
  user: null,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case reduxConstants.SIGNUP_LOAD:
      return { ...state, signUpLoad: true };
    case reduxConstants.SIGNUP_SUCCESS:
      return { ...state, signUpLoad: false, user: action.payload };
    case reduxConstants.SIGNUP_FAIL:
      return { ...state, signUpLoad: false, user: null };
    default:
      return state;
  }
}

export default AuthReducer;
