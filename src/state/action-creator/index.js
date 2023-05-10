export const depositMoney=(amount)=>{
  return(dispatch)=>{
    dispatch({
        type:'deposit',
        payload:amount
    })
  }
}

export const withdrawMoney=(amount)=>{
  return(dispatch)=>{
    dispatch({
        type:'withdraw',
        payload:amount
    })
  }
}

// withdrawMoney is a function that is returning the dispatch function which have type nad payload as ther methods 