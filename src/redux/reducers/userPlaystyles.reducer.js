const userPlaystylesReducer = (state= [], action) => {
    switch (action.type) {
        case 'SET_USER_PLAYSTYLES':
            return action.payload;
        default:
            return state;
    }
};


export default userPlaystylesReducer;