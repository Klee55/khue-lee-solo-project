import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


const HomePage = () => {
    const history = useHistory();
    const dispatch = useDispatch();


    const searchButton = () => {
        dispatch({
            type: 'FETCH_PLAYERS',
        });
        history.push('/search');
    }

    return (
        <>
            <h1>Home Page</h1>
            <button onClick={() => searchButton()}>
                Search Players
            </button>
            <button onClick={() => history.push('/profile')}>
                View Profile
            </button>
        </>
    )

}


export default HomePage;