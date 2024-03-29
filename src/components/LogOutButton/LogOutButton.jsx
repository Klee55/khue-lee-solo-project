import React from 'react';
import { useDispatch } from 'react-redux';
import logout from './logout.png'

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <div className={props.className} onClick={() => dispatch({ type: 'LOGOUT' })}>
    <img className='iconImg' src={logout}/>
    </div>
    // <button
    //   // This button shows up in multiple locations and is styled differently
    //   // because it's styled differently depending on where it is used, the className
    //   // is passed to it from it's parents through React props
    //   className={props.className}
    //   onClick={() => dispatch({ type: 'LOGOUT' })}
    // >
    //   Log Out
    // </button>
  );
}

export default LogOutButton;
