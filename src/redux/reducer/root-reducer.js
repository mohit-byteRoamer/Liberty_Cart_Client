import { combineReducers } from "redux";
import AuthReducer from "./auth-reducer";
import ProductReducer from "./product_reducer";

const rootReducers = combineReducers({ AuthReducer, ProductReducer });
export default rootReducers;
