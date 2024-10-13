import { combineReducers } from "redux";
import AuthReducer from "./auth-reducer";
import ProductReducer from "./product_reducer";
import UploadFileReducer from "./upload_file_reducer";
import CartReducer from "./cart_reducer";

const rootReducers = combineReducers({
   AuthReducer,
   CartReducer,
   ProductReducer,
   UploadFileReducer,
});
export default rootReducers;
