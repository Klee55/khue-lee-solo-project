
// store games for game input on registration page
const gameReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_GAME':
        return [...state, action.payload];
      case 'REMOVE_GAME':
        return state.filter( state => state != action.payload )
        // return state without action.payload or selected game when remove button is clicked in registration form
      default:
        return state;
    }
  };
  
  export default gameReducer;