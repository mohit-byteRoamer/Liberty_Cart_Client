import { combineReducers } from "redux";
import AuthReducer from "./auth_reducer";
import ProductReducer from "./product_reducer";
import UploadFileReducer from "./upload_file_reducer";
import CartReducer from "./cart_reducer";
import OrderReducer from "./order_reducer";

const rootReducers = combineReducers({
   AuthReducer,
   CartReducer,
   OrderReducer,
   ProductReducer,
   UploadFileReducer,
});
export default rootReducers;
