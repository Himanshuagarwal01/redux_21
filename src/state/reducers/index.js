// craeting combine reducer here 
import {combineReducers} from "redux";
import amountReducer from "./amountReducer";
import amountReducer12 from "./amountReducer1"

const reducers=combineReducers({
  amount:amountReducer,
  amount2:amountReducer12,
})




export default reducers;
//we always need to export all the reducers rape into single reducer function that is combineReducer function 
// many reducer functions can be reape into combine reducer by separating them by comma (,).