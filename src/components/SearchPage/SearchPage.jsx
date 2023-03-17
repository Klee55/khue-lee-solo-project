import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import './SearchPage.css';
// import gamer from '../Avatars/gamer.png';


const SearchPage = () => {
    const players = useSelector((store) => store.fetchPlayersReducer);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'FETCH_PLAYERS',
            payload: user.id
        });
    }, []);

    console.log(players);

    // go player profile on clicked
    const viewPlayer = (player) => {
        history.push(`/player/${player.id}`);
    }

    // add player to friendlist
    const addPlayer = (player) => {
        console.log('addPlayer button clicked', player);
        dispatch({
            type: 'ADD_PLAYER',
            payload: player
        });
        alert('Player added to friend list');
    }


    return (
        <div className="search">
            {players.map((player) => (
                <div className="player" key={player.id}>
                    <div className="playerAvatar">
                        <img className="avatarIcon" src={require(`../Avatars/${player.avatar}`)} />
                    </div>
                    <h3>
                        {player.username}
                    </h3>
                    <button onClick={() => addPlayer(player)}>
                        Add
                    </button>
                    <button onClick={() => viewPlayer(player)}>
                        View Player
                    </button>
                </div>
            ))}
        </div>
    );
}

export default SearchPage;