

let TokenReducer = (state, action) =>{
    switch (action.type) {
        case 'ADD_TOKEN':
          return action.payload;
        default:
          throw new Error();
      }
}
export default TokenReducer