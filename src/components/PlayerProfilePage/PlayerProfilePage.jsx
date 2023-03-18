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

    console.log(player);

    return (
        <div className='playerProfile'>
            {player.map((player) => (
                <div className="playerInfo" key={player.username}>
                    <div className="playerAvatarIcon">
                        <img className="avatarIcon" src={require(`../Avatars/${player.avatar}`)} />
                    </div>
                    <h2 className="playerUsername">{player.username}</h2>
                    <p>"{player.about}"</p>
                </div>
            ))}
            <div className='playerGameList'>
                <PlayerGameList />
            </div>
            <div className='playerPlaystyleList'>
                <PlayerPlaystyleList />
            </div>
            <div className='playerTimeList'>
                <PlayerTimeList />
            </div>
        </div>
    )
}


export default PlayerProfilePage;

