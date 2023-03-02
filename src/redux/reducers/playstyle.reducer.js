const playstyleReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PLAYSTYLE':
        return [...state, action.payload];
      case 'REMOVE_PLAYSTYLE':
        return state.filter( state => state != action.payload )
        // return state without action.payload or selected playstyle when remove button is clicked in registration form
      default:
        return state;
    }
  };
  
  export default playstyleReducer;