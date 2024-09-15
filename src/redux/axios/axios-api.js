import { Method } from "./apiMethods";

let header1 = {
  "Content-Type": "multipart/form-data",
};

let header2 = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const outletDomain = "users/";

//// Auth  API

export const signUpApi = (data) =>
  Method.POST(`${outletDomain}register`, data, header2);
