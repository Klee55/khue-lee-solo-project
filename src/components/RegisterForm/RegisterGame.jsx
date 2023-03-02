import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterGame = () => {

    const [game, setGame] = useState('')
    const dispatch = useDispatch();
    const addedGame = useSelector(store => store.gameReducer);

    console.log(addedGame);

    // send game input to gameReducer and clear input
    const addGame = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_GAME',
            payload: game
        });
        setGame('');
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
                Game:
                <input
                    type="text"
                    name="game"
                    value={game}
                    // required
                    onChange={(event) => setGame(event.target.value)}
                />
            </label>
            <button onClick={addGame}>
                Add Game
            </button>
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