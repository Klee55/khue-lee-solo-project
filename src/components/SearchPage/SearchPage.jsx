import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";


const SearchPage = () => {
    const players = useSelector((store) => store.fetchPlayersReducer);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();

    console.log(user);

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_PLAYERS',
            payload: user.id
        });
    }, []);

    // go player profile on clicked
    const viewPlayer = (player) => {
        history.push(`/player/${player.id}`);
    }

    // add player to friendlist
    const addPlayer = () => {
        console.log('addPlayer button clicked');
    }



    return (
        <div>
            <div>
                <ul>
                    {players.map((player) => (
                        <li key={player.id}>
                            Player Avatar goes here
                            <br />
                            Player Name: {player.username}
                            <br />
                            <button onClick={() => addPlayer(player)}>
                                Add
                            </button>
                            <button onClick={() => viewPlayer(player)}>
                                View Player
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SearchPage;