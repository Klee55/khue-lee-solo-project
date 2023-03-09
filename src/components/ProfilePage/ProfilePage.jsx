import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameList from './GameList/GameList';
import PlaystyleList from './PlaystyleList/PlaystyleList';
import TimeList from './TimeList/TimeList';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);

    console.log('user games:', user);

    useEffect(() => {
        dispatch({
            type: 'FETCH_PROFILE',
            payload: user.id
        });
        dispatch({ type: 'FETCH_GAMES' });
    }, []);

    return (
        <>
            <div>
                <h1>Profile Page</h1>
                <h2>{user.username}</h2>
                <p>{user.about}</p>
            </div>
            <div>
                <GameList />
            </div>
            <div>
                <PlaystyleList />
            </div>
            <div>
                <TimeList />
            </div>
            <div>
                <button onClick={history.push('/edit')}>
                    Edit Profile
                </button>
            </div>
        </>

    )

}


export default ProfilePage;