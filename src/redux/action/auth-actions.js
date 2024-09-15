import reduxContacts from "../redux-contants";

const signUpActionsLoad = (payload) => ({
  type: reduxContacts.SIGNUP_LOAD,
  payload,
});

const signUpActionsSuccess = (payload) => ({
  type: reduxContacts.SIGNUP_SUCCESS,
  payload,
});

const signUpActionsFail = (payload) => ({
  type: reduxContacts.SIGNUP_FAIL,
  payload,
});


export { signUpActionsLoad, signUpActionsSuccess, signUpActionsFail };
