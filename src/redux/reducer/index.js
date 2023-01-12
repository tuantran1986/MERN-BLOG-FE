import { combineReducers } from "redux";
import { postReducer } from "./postReducer";

// test
console.log('REDUCER - ROOT: tich hop thanh cong !');

const rootReducer = combineReducers({
    postReducer: postReducer
});

export default rootReducer;