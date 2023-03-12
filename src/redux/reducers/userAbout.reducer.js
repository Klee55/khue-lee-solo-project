const userAboutReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_ABOUT':
            return action.payload;
        default:
            return state;
    }
}

export default userAboutReducer