import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlayerGameList from './PlayerGameList/PlayerGameList';
import PlayerPlaystyleList from './PlayerPlaystyleList/PlayerPlaystyleList';
import PlayerTimeList from './PlayerTimeList/PlayerTimeList';

const PlayerProfilePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const player = useSelector((store) => store.onePlayerReducer);
    const { id } = useParams();

    console.log('player info', id);
    console.log('one player indo', player);

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
        <div>
            <h1>Player Page</h1>
            {player.map((player) => (
                <div>
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