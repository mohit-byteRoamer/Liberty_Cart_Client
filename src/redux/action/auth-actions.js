import reduxConstants from "../constants/reduxConstants";

// SignUP Action
export const signUpActionsLoad = (payload) => ({
  type: reduxConstants.SIGNUP_LOAD,
  payload,
});

export const signUpActionsSuccess = (payload) => ({
  type: reduxConstants.SIGNUP_SUCCESS,
  payload,
});

export const signUpActionsFail = (payload) => ({
  type: reduxConstants.SIGNUP_FAIL,
  payload,
});

// Login Action
export const logInActionsLoad = (payload) => ({
  type: reduxConstants.LOGIN_LOAD,
  payload,
});

export const logInActionsSuccess = (payload) => ({
  type: reduxConstants.LOGIN_SUCCESS,
  payload,
});

export const logInActionsFail = (payload) => ({
  type: reduxConstants.LOGIN_FAIL,
  payload,
});