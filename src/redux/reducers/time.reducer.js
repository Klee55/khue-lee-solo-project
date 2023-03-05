

const timeReducer = (state = [], action) => {
console.log(action.payload);

  switch (action.type) {
    case 'ADD_TIME':
      return [...state, action.payload];
    case 'REMOVE_TIME':
      return state.filter(state => state != action.payload)
    // return state without action.payload or selected time when remove button is clicked in registration form
    default:
      return state;
  }
};

export default timeReducer;