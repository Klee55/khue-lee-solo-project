const userTimesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_TIMES':
            return action.payload;
        default:
            return state;
    }
}

export default userTimesReducer;