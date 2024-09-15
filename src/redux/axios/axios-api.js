import { Method } from "./apiMethods";

let header1 = {
  "Content-Type": "multipart/form-data",
};

let header2 = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

//// Auth  API
export const signUpApi = (data) => Method.POST(`users/register`, data, header2);
