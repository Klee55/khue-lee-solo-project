import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterGame = () => {

    const [game, setGame] = useState('')
    console.log(game);
    const dispatch = useDispatch();
    const addedGame = useSelector(store => store.gameReducer);

    console.log(addedGame);


    const addGame = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_GAME',
            payload: game
        })
    };

    return (
        <>
            <label htmlFor="game">
                Game:
                <input
                    type="text"
                    name="game"
                    value={game}
                    required
                    onChange={(event) => setGame(event.target.value)}
                />
            </label>
            <button onClick={addGame}>
                Add Game
            </button>
            <ul>
                {addedGame.map((addedGame) => (
                    <li key={addedGame}>
                        {addedGame}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default RegisterGame