const onePlayerReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_ONE_PLAYER':
            return action.payload;
        default:
            return state;
    }
}

export default onePlayerReducer;