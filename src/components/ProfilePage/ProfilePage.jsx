import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const ProfilePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const userGames = useSelector((store) => store.userGamesReducer);
    const games = useSelector((store) => store.fetchGamesReducer);

    console.log ('user games:', games);

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
            <section>
                {userGames.map((userGame) => (
                    <p>{userGame.game}</p>
                ))}
            </section>

        </div>
    )

}


export default ProfilePage;