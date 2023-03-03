import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterGame = () => {

    const [game, setGame] = useState('')
    const dispatch = useDispatch();
    const addedGame = useSelector(store => store.gameReducer);
    const games = useSelector(store => store.fetchGamesReducer);

    // fetch games on load
    useEffect(() => {
        dispatch({ type: 'FETCH_GAMES' });
      }, []);

    // send game input to gameReducer and clear input
    const addGame = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_GAME',
            payload: game
        });
    };

    // remove selected game when remove button is clicked
    const removeGame = (addedGame) => {
        dispatch({
            type: 'REMOVE_GAME',
            payload: addedGame
        });
    };

    return (
        <>  
            <label htmlFor="game">
                <select 
                // placeholder 
                type="text"
                value={game} 
                onChange={(event) => setGame(event.target.value)}>
                    {games.map((game) => (
                        <option key={game.id}>
                            {game.game}
                        </option>
                    ))}
                </select>
                <button onClick={addGame}>Add Game</button>
            </label>
            <ul>
                {addedGame.map((addedGame) => (
                    <li key={addedGame}>
                        {addedGame} <button onClick={() => removeGame(addedGame)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default RegisterGame