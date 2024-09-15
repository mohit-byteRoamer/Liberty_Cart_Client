import reduxContacts from "../redux-contants";

const initialState = {
  signUpLoad: false,
  user: null,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case reduxContacts.SIGNUP_LOAD:
      return { ...state, signUpLoad: true };
    case reduxContacts.SIGNUP_SUCCESS:
      return { ...state, signUpLoad: false, user: action.payload };
    case reduxContacts.SIGNUP_FAIL:
      return { ...state, signUpLoad: false, user: null };
    default:
      return state;
  }
}

export default AuthReducer;
