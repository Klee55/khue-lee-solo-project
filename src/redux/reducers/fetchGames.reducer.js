// fetch games and store it
const fetchGamesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_GAMES':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default fetchGamesReducer;