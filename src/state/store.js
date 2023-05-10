// creating store here 
import {createStore} from "redux";
import { applyMiddleware } from "@reduxjs/toolkit";
import reducers from "./reducers";
import thunk from "redux-thunk";
export  const store= createStore(reducers,{},applyMiddleware(thunk));


  

// npm install @reduxjs/toolkit  --- command to insatll redux toolkit

// import {configureStore} from '@reduxjs/toolkit'----- import 
// syntax------
// const store = configureStore({reducer:BookReducer});
