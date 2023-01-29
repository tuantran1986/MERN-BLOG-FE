import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";
import { postReducer } from "./postReducer";

// test
console.log('REDUCER - ROOT: tich hop thanh cong !');

const rootReducer = combineReducers({
    postReducer: postReducer,
    modalReducer: modalReducer
});

export default rootReducer;