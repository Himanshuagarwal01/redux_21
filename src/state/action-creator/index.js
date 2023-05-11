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

export const deposit2Money=(amount1)=>{
  return(dispatch)=>{
    dispatch({
        type:'depositamt',
        payload:amount1
    })
  }
}

export const withdraw2Money=(amount1)=>{
  return(dispatch)=>{
    dispatch({
        type:'withdrawamt',
        payload:amount1
    })
  }
}

// withdrawMoney is a function that is returning the dispatch function which have type nad payload as ther methods 