import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegisterGame from './RegisterGame';
import RegisterAbout from './RegisterAbout';
import RegisterPlaystyle from './RegisterPlaystyle';
import RegisterTime from './RegisterTime';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const errors = useSelector((store) => store.errors);
  const about = useSelector((store) => store.aboutReducer);
  const game = useSelector((store) => store.gameReducer);
  const playstyle = useSelector((store) => store.playstyleReducer)
  const time = useSelector((store) => store.timeReducer);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        about: about,
        game: game,
        playstyle: playstyle,
        time: time,
      },
    });
  }; // end registerUser



  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br></br>
      </div>
      <RegisterAbout />
      <div>
      </div>
        <br></br>
      <RegisterGame />
      <div>
        <br></br>
      </div>
      <RegisterPlaystyle />
      <div>
        <br></br>
      </div>
      <RegisterTime />
      <div>
      <br></br>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
