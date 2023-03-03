// fetch palystyles and store it
const fetchPlaystylesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PLAYSTYLES':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default fetchPlaystylesReducer;