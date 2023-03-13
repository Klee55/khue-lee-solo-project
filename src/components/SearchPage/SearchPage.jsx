import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


const SearchPage = () => {
    const players = useSelector((store) => store.fetchPlayersReducer)
    const dispatch = useDispatch();
    const history = useHistory();


    console.log(players);

    return (
        <div>
            {/* <h1>Search Page</h1>
            <button onClick={() => searchButton()}>
                Search
            </button> */}
            <div>
                <ul>
                    {players.map((player) => (
                        <li>
                            Player Avatar goes here
                            <br/>
                            Player Name: {player.username}
                            <br/>
                            <button>Add</button>
                            <button>View Player</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SearchPage;