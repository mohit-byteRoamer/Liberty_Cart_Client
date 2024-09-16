import { Method } from "./apiMethods";

let header = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

//// Auth  API
export const signUpApi = (data) => Method.POST(`users/register`, data, header);
