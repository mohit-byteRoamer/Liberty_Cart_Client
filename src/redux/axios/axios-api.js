import { Method } from "./apiMethods";

let header = {
   Accept: "application/json",
   "Content-Type": "application/json",
};

// AUTH API'S
export const signUpApi = (data) => Method.POST(`users/register`, data, header);
export const logInApi = (data) => Method.POST(`users/login`, data, header);

// PRODUCT API'S
export const createProductApi = (data) => Method.POST("product/new", data, header);
export const getProductApi = () => Method.GET("product/all", header);

// Second Way for create a LogInAPI
// export const logInApi = async (data) => {
//    const response = await axios.post(`${url}api/v1/users/login`, data, header);
//    console.log("LOGIN response:", response)
// };
