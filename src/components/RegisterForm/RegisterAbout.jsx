import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

const RegisterAbout = () => {
    const [about] = useState('');
    const dispatch = useDispatch();

    // send input to timeReducer
    const handleChange = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_ABOUT', payload: event.target.value});
    }
    return (
        <>
            <label htmlFor="about">
                About:
                <input
                    type="text"
                    name="about"
                    // value={about}
                    required
                    onChange={handleChange}
                />
            </label>
        </>
    )
}
export default RegisterAbout