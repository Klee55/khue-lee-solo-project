
// store games for game input on registration page
const gameReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_GAME':
        return [...state, action.payload];
      case 'REMOVE_GAME':
        return [];
      default:
        return state;
    }
  };
  
  export default gameReducer;