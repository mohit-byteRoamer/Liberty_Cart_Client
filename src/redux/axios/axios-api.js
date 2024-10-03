import { Method } from "./apiMethods";

let header = {
   Accept: "application/json",
   "Content-Type": "application/json",
};

let header1 = {
   "Content-Type": "multipart/form-data",
};

// AUTH API'S
export const signUpApi = (data) => Method.POST(`users/register`, data, header);
export const logInApi = (data) => Method.POST(`users/login`, data, header);

// ---------------------------------------------------------------------------------- //

// PRODUCT API'S
export const createProductApi = (data) => Method.POST("product/new", data, header);
export const getProductApi = () => Method.GET("product/all", header);
export const getProductCategoryApi = () => Method.GET("product/category", header);
export const getLatestProductApi = () => Method.GET("product/latest", header);
export const getProductDetailApi = (id) => Method.GET(`product/${id}`, header);

// ---------------------------------------------------------------------------------- //

// ADMIN API'S
export const getAdminProductApi = () => Method.GET("product/admin-products", header);
export const updateProductApi = (id) => Method.PUT(`product/${id}`, header);
export const deleteProductApi = (id) => Method.DELETE(`product/${id}`, header);

// ---------------------------------------------------------------------------------- //

// UPLOAD FILE API
export const uploadFileApi = (data) => Method.POST("common/uploadFile", data, header1);

// ---------------------------------------------------------------------------------- //

// Second Way for create a LogInAPI
// export const logInApi = async (data) => {
//    const response = await axios.post(`${url}api/v1/users/login`, data, header);
//    console.log("LOGIN response:", response)
// };
