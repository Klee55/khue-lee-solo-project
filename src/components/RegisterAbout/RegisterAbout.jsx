import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterAbout = () => {
    const about = useSelector((store) => store.aboutReducer);
    const dispatch = useDispatch();

    // send input to timeReducer
    const handleChange = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_ABOUT', payload: event.target.value });
    }
    return (
        <div>
            About:
            <textarea
                value={about}
                onChange={(event) => handleChange(event)}
            />

        </div>
    )
}
export default RegisterAbout