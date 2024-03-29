import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RegisterGame from '../RegisterGame/RegisterGame';
import RegisterAbout from '../RegisterAbout/RegisterAbout';
import RegisterPlaystyle from '../RegisterPlaystyle/RegisterPlaystyle';
import RegisterTime from '../RegisterTime/RegisterTime';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const games = useSelector((store) => store.gameReducer);
  const playstyles = useSelector((store) => store.playstyleReducer);
  const times = useSelector((store) => store.timeReducer);
  const about = useSelector((store) => store.aboutReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(about);


  const completeProfile = () => {
    dispatch({
      type: "REGISTER_GAMES",
      payload: games
    });
    dispatch({
      type: "REGISTER_PLAYSTYLES",
      payload: playstyles
    });
    dispatch({
      type: "REGISTER_TIMES",
      payload: times
    });
    dispatch({
      type: "SAVE_USER_ABOUT",
      payload: about
    })
    history.push('/home');
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <form>
        <h3>Your profile is not complete:</h3>
        <div>
          <RegisterAbout />
        </div>
        <div>
          <RegisterGame />
        </div>
        <div>
          <RegisterPlaystyle />
        </div>
        <div>
          <RegisterTime />
        </div>
      </form>
      <div>
        <button onClick={completeProfile}>
          Save
        </button>
      </div>
      <br />
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
