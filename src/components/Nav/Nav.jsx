import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import icon from './controller.jpg'
import avatar from '../ProfilePage/deadpool.png'
import home from './home.png';
import person from './person.png';


function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      {user.id && (
        <Link to="/home">
          <img className="userAvatar" src={avatar} alt="user-avatar" />
        </Link>
      )}
      {!user.id && (
        <Link to="/home">
          <img className="userAvatar" src={person} alt="user-avatar" />
        </Link>
      )}
      <div className='nameIcon'>
        <h1 className='gaming'>
          Gaming
        </h1>

        <img className="icon" src={icon} alt="controller-icon" />

        <h1 className='buddy'>Buddy</h1>
      </div>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {/* <Link  to="/user">
              Home
            </Link> */}
            <div className="navLink">
              <Link to="/home">

                <img className='iconImg' src={home} />

              </Link>
            </div>

            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}
            <div className="navLink">
              <LogOutButton />
            </div>
          </>
        )}

        {/* <Link className="navLink" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
}

export default Nav;
