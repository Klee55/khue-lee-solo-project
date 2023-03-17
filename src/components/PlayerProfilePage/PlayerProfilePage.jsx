import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlayerGameList from './PlayerGameList/PlayerGameList';
import PlayerPlaystyleList from './PlayerPlaystyleList/PlayerPlaystyleList';
import PlayerTimeList from './PlayerTimeList/PlayerTimeList';
import './PlayerProfilePage.css';

const PlayerProfilePage = () => {
    const dispatch = useDispatch();
    const player = useSelector((store) => store.onePlayerReducer);
    const { id } = useParams();

    useEffect(() => {
        dispatch({
            type: 'FETCH_PROFILE',
            payload: id
        });
        dispatch({
            type: 'FETCH_ONE_PLAYER',
            payload: id
        });
    }, []);

    return (
        <div className='profile'>
            <h1>Player Page</h1>
            {player.map((player) => (
                <div key={player.username}>
                    <h2>{player.username}</h2>
                    <p>{player.about}</p>
                </div>
            ))}
            <div>
                <PlayerGameList />
            </div>
            <div>
                <PlayerPlaystyleList />
            </div>
            <div>
                <PlayerTimeList />
            </div>
        </div>
    )
}


export default PlayerProfilePage;