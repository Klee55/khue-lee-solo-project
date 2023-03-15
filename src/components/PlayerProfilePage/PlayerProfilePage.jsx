import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import PlayerGameList from './PlayerGameList/PlayerGameList';
import PlayerPlaystyleList from './PlayerPlaystyleList/PlayerPlaystyleList';
import PlayerTimeList from './PlayerTimeList/PlayerTimeList';

const PlayerProfilePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();

    console.log('player info', id);

    useEffect(() => {
        dispatch({
            type: 'FETCH_PROFILE',
            payload: id
        });
    }, [id]);

    return (
        <div>
            <div>
                <h1>Player Page</h1>
                {/* <h2>{player.username}</h2>
                <p>{player.about}</p> */}
            </div>
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