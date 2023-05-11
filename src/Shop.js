import React from 'react';
import { useDispatch } from 'react-redux';
// import { bindActionCreator } from 'redux';
import {  actionCreators } from './state/index';
import shoes from "./image/shoes.jpg";
import shoes1 from "./image/images.jpeg";

const Shop = () => {
  const dispatch=useDispatch();
  
  // const actions=bindActionCreator(actionCreators,dispatch)
  return (
    <>
    <div className='Logo mx-5 mt-5'>
      <h2>Buy Abibas</h2>
      <div>
        <div>
      <img src={shoes} alt="internet problem" className='shoes'></img>
      </div>
      {/* <button onClick={(()=>{dispatch(actionCreators.withdrawMoney(499))})}className='btn btn-primary mx-2'>Remove</button>
      Add this item 
      <button onClick={(()=>dispatch(actionCreators.depositMoney(499)))}className='btn btn-primary mx-2'>Add</button> */}
      <h2>Rs499</h2>
      <button onClick={(()=>{dispatch(actionCreators.withdrawMoney(499))})}className='btn  btn-warning mx-2'>Remove</button>
      Add this item 
      <button onClick={(()=>dispatch(actionCreators.depositMoney(499)))}className='btn btn-warning mx-2'>Add</button>
      </div>
      
    </div>
    <div className='Logo mx-5 mt-5'>
    <h2>Buy Nike Air Jordan  </h2>
    <div>
      <div>
    <img src={shoes1} alt="internet problem" className='shoes'></img>
    </div>
    <h2>Rs20,000</h2>
    {/* <button onClick={(()=>{dispatch(actionCreators.withdrawMoney(499))})}className='btn btn-primary mx-2'>Remove</button>
    Add this item 
    <button onClick={(()=>dispatch(actionCreators.depositMoney(499)))}className='btn btn-primary mx-2'>Add</button> */}
    <button onClick={(()=>{dispatch(actionCreators.withdrawMoney(20000))})}className='btn  btn-warning mx-5'>Remove</button>
    Add this item 
    <button onClick={(()=>dispatch(actionCreators.depositMoney(20000)))}className='btn btn-warning mx-5'>Add</button>
    </div>
    
  </div>
  </>
  )
}

export default Shop
