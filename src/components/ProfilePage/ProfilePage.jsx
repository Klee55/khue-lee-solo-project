import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameList from './GameList/GameList';
import PlaystyleList from './PlaystyleList/PlaystyleList';
import TimeList from './TimeList/TimeList';
import FriendList from './FriendList/FriendList';
import avatar from '../Avatars/deadpool.png'
import './ProfilePage.css';

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
        <div className='profile'>
            <div className='avatar'>
                <div className='avatarImg'>
                <img  src={require(`../Avatars/${user.avatar}`)} />
                </div>
                <h2 className='username'>{user.username}</h2>
                <p>"{user.about}"</p>
            </div>
            <div className='friendList'>
                <FriendList />
            </div>
            <div className='gameList'>
                <GameList />
            </div>
            <div className='playstyleList'>
                <PlaystyleList />
            </div>
            <div className='timeList'>
                <TimeList />
            </div>
            <div className='editButton'>
                <button onClick={() => history.push('/edit')}>
                    Edit Profile
                </button>
            </div>
        </div>

    )

}


export default ProfilePage;