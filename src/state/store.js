// creating store here 
// import {createStore} from "redux";
import { createStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";
// import thunk from "redux-thunk";
export  const store= createStore(reducers,{},applyMiddleware(thunk));
//  const store =configureStore(reducers:{Reducers:reducers},{},applyMiddleware(thunk));

export default store ;

// npm install @reduxjs/toolkit  --- command to insatll redux toolkit

// import {configureStore} from '@reduxjs/toolkit'----- import 
// syntax------
// const store = configureStore({reducer:BookReducer});
