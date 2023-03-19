import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const EditGame = () => {
    const games = useSelector((store) => store.fetchGamesReducer);
    const user = useSelector(store => store.user);
    const userGames = useSelector((store) => store.userGamesReducer);
    const [matchedGameChoice, setMatchedGameChoice] = useState('')
    const [gameId, setGameId] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const setState = (event) => {
        event.preventDefault();

        let gameChoice = Number(event.target.value);
        let selectedGameArray = userGames.filter(item => item.game_id === gameChoice);
        let selectedGame = selectedGameArray[0];

        setMatchedGameChoice(selectedGame);
        setGameId(gameChoice);
    }

    // fetch games on load
    useEffect(() => {
        dispatch({ type: 'FETCH_GAMES' });
        dispatch({
            type: 'FETCH_PROFILE',
            payload: user.id
        });
    }, []);

    // add to user's games
    const addGame = (event) => {
        event.preventDefault();
        if (typeof matchedGameChoice !== 'undefined') {
            return alert(' selected game already added')
        } else {
            dispatch({
                type: 'ADD_USER_GAME',
                payload: {
                    user_id: user.id,
                    game_id: Number(gameId)
                }
            });
            history.push('/edit');
        };
    }

    // remove game from list
    const removeGame = (userGame) => {
        dispatch({
            type: 'REMOVE_USER_GAME',
            payload: userGame.game_id
        });
        history.push('/edit');
    }

    return (
        <div>
            <div>
                <label htmlFor="game">
                    <h3>Games:</h3>
                    <select
                        className="input"
                        type="text"
                        onChange={(event) => setState(event)}>
                        {games.map((game) => (
                            <option value={game.id} key={game.id}>
                                {game.game}
                            </option>
                        ))}
                    </select>
                    <button onClick={(event) => addGame(event)}>
                        Add Game
                    </button>
                </label>
            </div>
            <div>
                <div className="list">
                    <ul>
                        {userGames.map((userGame) => (
                            <li className="listItem" key={userGame.game}>
                                {userGame.game}
                                <button onClick={() => removeGame(userGame)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EditGame;