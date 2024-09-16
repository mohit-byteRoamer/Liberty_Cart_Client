import reduxConstants from "../constants/reduxConstants";

const signUpActionsLoad = (payload) => ({
  type: reduxConstants.SIGNUP_LOAD,
  payload,
});

const signUpActionsSuccess = (payload) => ({
  type: reduxConstants.SIGNUP_SUCCESS,
  payload,
});

const signUpActionsFail = (payload) => ({
  type: reduxConstants.SIGNUP_FAIL,
  payload,
});


export { signUpActionsLoad, signUpActionsSuccess, signUpActionsFail };
