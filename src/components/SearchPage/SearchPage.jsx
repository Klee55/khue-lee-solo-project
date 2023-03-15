import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";


const SearchPage = () => {
    const players = useSelector((store) => store.fetchPlayersReducer)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_PLAYERS' });
    }, []);

    const viewPlayer = (player) => {
        // console.log('viewPlayer button clicked', player);
        // dispatch({
        //     type: 'SET_ONE_PLAYER',
        //     payload: player.id
        // });
        history.push(`/player/${player.id}`);
    }



    return (
        <div>
            {/* <h1>Search Page</h1>
            <button onClick={() => searchButton()}>
                Search
            </button> */}
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