import { createStore } from "redux";
import rootReducers from "./reducer/root-reducer";

const store = createStore(rootReducers);

export default store;
