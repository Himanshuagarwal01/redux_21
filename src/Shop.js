import React from 'react';
import { useDispatch } from 'react-redux';
// import { bindActionCreator } from 'redux';
import {  actionCreators } from './state/index';

const Shop = () => {
  const dispatch=useDispatch();
  // const actions=bindActionCreator(actionCreators,dispatch)
  return (
    <div>
      <h2>Buy Abibas Shop at 499 rs </h2>
      {/* <button onClick={(()=>{dispatch(actionCreators.withdrawMoney(499))})}className='btn btn-primary mx-2'>Remove</button>
      Add this item 
      <button onClick={(()=>dispatch(actionCreators.depositMoney(499)))}className='btn btn-primary mx-2'>Add</button> */}
      <button onClick={(()=>{dispatch(actionCreators.withdrawMoney(499))})}className='btn btn-primary mx-2'>Remove</button>
      Add this item 
      <button onClick={(()=>dispatch(actionCreators.depositMoney(499)))}className='btn btn-primary mx-2'>Add</button>
    </div>
  )
}

export default Shop
