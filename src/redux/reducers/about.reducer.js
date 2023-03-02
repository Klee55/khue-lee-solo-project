// reducer for About Me input on regristration page
const aboutReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_ABOUT':
        return action.payload;
      default:
        return state;
    }
  };

  export default aboutReducer;