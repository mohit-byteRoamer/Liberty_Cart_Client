import { Method } from "./apiMethods";

let header = {
   Accept: "application/json",
   "Content-Type": "application/json",
};

let header1 = {
   "Content-Type": "multipart/form-data",
};
// ---------------------------------------------------------------------------------- //

// AUTH API'S
export const signUpApi = (data) => Method.POST(`users/register`, data, header);
export const logInApi = (data) => Method.POST(`users/login`, data, header);
// ---------------------------------------------------------------------------------- //

// PRODUCT API'S
export const createProductApi = (data) => Method.POST("product/new", data, header);
export const getProductApi = ({ pageNumber, category }) =>
   Method.GET(`product/all?page=${pageNumber || ""}&category=${category || ""}`, header);
export const getProductCategoryApi = () => Method.GET("product/category", header);
export const getLatestProductApi = () => Method.GET("product/latest", header);
export const getProductDetailApi = (id) => Method.GET(`product/${id}`, header);
// ---------------------------------------------------------------------------------- //

// ADMIN API'S
export const getAdminProductApi = (pageNumber) =>
   Method.GET(`product/admin-products?page=${pageNumber}`, header);
export const updateProductApi = (data) => Method.PUT(`product/${data.id}`, data, header);
export const deleteProductApi = (id) => Method.DELETE(`product/${id}`, header);
// ---------------------------------------------------------------------------------- //

// UPLOAD FILE API
export const uploadFileApi = (data) => Method.POST("common/uploadFile", data, header1);
// ---------------------------------------------------------------------------------- //

// CART API'S
export const UpdateCartApi = (apiPayload) => Method.POST("cart/update-cart", apiPayload, header);
export const getCartListApi = () => Method.GET("cart/list", header);
export const DeleteCartApi = (id) => Method.DELETE(`cart/delete/${id}`, header);
// ---------------------------------------------------------------------------------- //

// Order API's
export const createOrderApi = (data) => Method.POST("order/new", data, header);
export const deleteOrderApi = (id) => Method.DELETE(`order/${id}`, header);
export const getAllOrderApi = () => Method.GET("order/allOrder", header);

// ---------------------------------------------------------------------------------- //

// Second Way for create a LogInAPI
// export const logInApi = async (data) => {
//    const response = await axios.post(`${url}api/v1/users/login`, data, header);
//    console.log("LOGIN response:", response)
// };
