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
  
  // user will be on the redux state at:
  // state.user
  export default gameReducer;