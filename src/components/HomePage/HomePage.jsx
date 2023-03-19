import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './HomePage.css'


const HomePage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);


    const searchButton = () => {
        dispatch({
            type: 'FETCH_PLAYERS',
        });
        history.push('/search');
    }

    return (
        <div className='home'>
            <h1>Welcome, {user.username}</h1>
            <p>Say gooddbye to lonely game nights and start finding your gaming buddies!</p>
            <br/>
            <br/>
            <button onClick={() => searchButton()}>
                Search Players
            </button>
            {/* <button onClick={() => history.push('/profile')}>
                View Profile
            </button> */}
        </div>
    )

}


export default HomePage;