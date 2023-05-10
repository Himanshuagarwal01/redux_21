// craeting combine reducer here 
import {combineReducers} from "redux";
import amountReducer from "./amountReducer";

const reducers=combineReducers({
  amount:amountReducer,
})


export default reducers;
//we always need to export all the reducers rape into single reducer function that is combineReducer function 
// many reducer functions can be reape into combine reducer by separating them by comma (,).