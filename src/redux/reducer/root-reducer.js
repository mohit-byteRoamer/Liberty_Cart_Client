import { combineReducers } from "redux";
import AuthReducer from "./auth-reducer";
import ProductReducer from "./product_reducer";
import UploadFileReducer from "./upload_file_reducer";

const rootReducers = combineReducers({ AuthReducer, ProductReducer, UploadFileReducer });
export default rootReducers;
