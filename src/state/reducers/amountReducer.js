const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'deposit':
      if (state < 0) {
        return state = 0;
      } else {
        return state + action.payload;
      }
    case 'withdraw':
      if (state <= 499) {
        return state = 0;
      } else {
        return state - action.payload;
      }
   default :
   return state;
  }
}

export default reducer;

//we always need to export all the reducers rape into single reducer function that is combineReducer function 
// many reducer functions can be reape into combine reducer by separating them by comma (,).