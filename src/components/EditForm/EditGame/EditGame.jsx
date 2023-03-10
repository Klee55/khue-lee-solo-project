import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const EditGame = () => {
    const games = useSelector((store) => store.fetchGamesReducer);
    const user = useSelector(store => store.user);
    const userGames = useSelector((store) => store.userGamesReducer);
    const history = useHistory();

    

    const [gameId, setGameId] = useState('');
    const dispatch = useDispatch();

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
        dispatch({
            type: 'ADD_USER_GAME',
            payload: {
                user_id: user.id,
                game_id: Number(gameId)
            }
        });
        dispatch({
            type: 'FETCH_PROFILE',
            payload: user.id
        });
        history.push('/edit');
    };

    const removeGame = (event) => {
        console.log('removeGame clicked');
        event.preventDefault();
        dispatch({ 
            type: 'REMOVE_USER_GAME',
            payload: Number(gameId)
        })
    }



    return (
        <>
            <div>
                <label htmlFor="game">
                    Game:
                    <select
                        // placeholder 
                        type="text"
                        onChange={(event) => setGameId(event.target.value)}>
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
                <ul>
                    List of Games:
                    {userGames.map((userGame) => (
                        <li key={userGame.game}>
                            {userGame.game}
                            <button onClick={(event) => removeGame(event)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default EditGame;