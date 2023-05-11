const reducer1 = (state = 0, action) => {
  switch(action.type){
case 'depositamt':
  if (state <= 0) {
    return state = 0;
  } else { return state + action.payload; }
case 'withdrawamt':
  if (state <= 20000) {
    return state = 0;
  } else {
    return state - action.payload;
  }
default:
  return state;
}
}

export default reducer1;