import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import RegisterGame from '../RegisterGame/RegisterGame';
import RegisterAbout from '../RegisterAbout/RegisterAbout';
import RegisterPlaystyle from '../RegisterPlaystyle/RegisterPlaystyle';
import RegisterTime from '../RegisterTime/RegisterTime';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const game = useSelector((store) => store.gameReducer);
  const dispatch = useDispatch();

  const completeProfile = () => {
    dispatch({
      type: "REGISTER_GAMES",
      payload: game
    })
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <from>
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
      </from>
      <div>
        <button onClick={completeProfile}>
          Save
        </button>
      </div>
      <br/>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
