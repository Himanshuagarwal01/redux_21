// creating store here 
import {configureStore} from "@reduxjs/toolkit";
import reducers from "./reducers";
export  const store= configureStore(reducers);


  

// npm install @reduxjs/toolkit  --- command to insatll redux toolkit

// import {configureStore} from '@reduxjs/toolkit'----- import 
// syntax------
// const store = configureStore({reducer:BookReducer});
