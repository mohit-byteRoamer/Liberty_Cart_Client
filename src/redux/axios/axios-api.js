import axios from "axios";
import { url } from "./apikit";
import { Method } from "./apiMethods";

let header = {
   Accept: "application/json",
   "Content-Type": "application/json",
};

//// Auth  API
export const signUpApi = (data) => Method.POST(`users/register`, data, header);

export const logInApi = async (data) => {
   const response = await axios.post(`${url}api/v1/users/login`, data, header);
   console.log("LOGIN response:", response)
};
