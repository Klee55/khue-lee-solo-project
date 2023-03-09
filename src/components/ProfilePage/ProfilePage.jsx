import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userPlaystylesReducer from '../../redux/reducers/userPlaystyles.reducer';


const ProfilePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const userGames = useSelector((store) => store.userGamesReducer);
    const userPlaystyles = useSelector((store) => store.userPlaystylesReducer)
    const games = useSelector((store) => store.fetchGamesReducer);
    

    console.log ('user games:', userPlaystyles);

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_PROFILE',
            payload: user.id
        });
        dispatch({ type: 'FETCH_GAMES' });
    }, []);

    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                List of Games:
                {userGames.map((userGame) => (
                    <li key={userGame.game}>
                        {userGame.game}
                    </li>
                ))}
            </ul>
            <ul>
                List of Playstyles:
                {userPlaystyles.map((userPlaystyles) => (
                    <li key={userPlaystyles.style}>
                        {userPlaystyles.style}
                    </li>
                ))}
            </ul>

        </div>
    )

}


export default ProfilePage;