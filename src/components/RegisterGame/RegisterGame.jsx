import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterGame = () => {

    const [game, setGame] = useState('');
    const [gameId, setGameId] = useState('');
    const [matchedGameChoice, setMatchedGameChoice] = useState('')
    const addedGame = useSelector(store => store.gameReducer);
    const games = useSelector(store => store.fetchGamesReducer);
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    // set game and gameId on change
    const setState = (event) => {
        event.preventDefault();

        let gameChoice = event.target.value;
        let selectedGameArray = games.filter(item => item.game === gameChoice);
        // Filter returns a list but should only have one match
        let selectedGame = selectedGameArray[0];
        // return game object if it's already in addedGame reducer
        let selectedGameChoice = addedGame.filter(item => item.game === gameChoice);
        let matchedGameChoice = selectedGameChoice[0];

        setGame(event.target.value);
        setGameId(selectedGame.id);
        setMatchedGameChoice(matchedGameChoice);

    }

    // fetch games on load
    useEffect(() => {
        dispatch({ type: 'FETCH_GAMES' });
    }, []);

    // send game input to gameReducer
    const addGame = (event) => {
        event.preventDefault();

        if (typeof matchedGameChoice !== 'undefined') {
            return alert(' selected game already added')
            // alert if game is already on added list
        } else {
            dispatch({
                type: 'ADD_GAME',
                payload: {
                    game: game,
                    user_id: user.id,
                    game_id: gameId
                }
            });
        }
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
                <select
                    // placeholder 
                    type="text"
                    value={game}
                    onChange={(event) => setState(event)}>
                    {games.map((game) => (
                        <option key={game.id}>
                            {game.game}
                        </option>
                    ))}
                </select>
                <button onClick={addGame}>Add Game</button>
            </label>
            <ul></ul>
            <ul>
                {addedGame.map((addedGame) => (
                    <li key={addedGame.game}>
                        {addedGame.game} <button onClick={() => removeGame(addedGame)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    )
}


export default RegisterGame