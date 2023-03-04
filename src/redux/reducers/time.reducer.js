const timeReducer = (state = [], action) => {
  console.log(action);
  console.log(action.payload);
  let time = action.payload;
  //console.log(time[0]);
  // console.log(action.payload[1]);
    switch (action.type) {
      case 'ADD_TIME':
        return [...state, action.payload.startTime];
      case 'REMOVE_TIME':
        return state.filter( state => state != action.payload )
        // return state without action.payload or selected time when remove button is clicked in registration form
      default:
        return state;
    }
  };
  
  export default timeReducer;