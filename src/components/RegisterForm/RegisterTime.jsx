import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterTime = () => {

    const [time, setTime] = useState('')
    const dispatch = useDispatch();
    const addedTime = useSelector(store => store.timeReducer);

    // send time input to timeReducer and clear input
    const addTime = (event) => {
        event.preventDefault();
        
        dispatch({
            type: 'ADD_TIME',
            payload: time
        });
        setTime('');
    };

    // remove selected time when remove button is clicked
    const removeTime = (addedTime) => {
        dispatch({
            type: 'REMOVE_TIME',
            payload: addedTime
        });
    };

    return (
        <>
            <label htmlFor="time">
                Time:
                <input
                    type="text"
                    name="time"
                    value={time}
                    // required
                    onChange={(event) => setTime(event.target.value)}
                />
            </label>
            <button onClick={addTime}>
                Add
            </button>
            <ul>
                {addedTime.map((addedTime) => (
                    <li key={addedTime}>
                        {addedTime}
                        <button onClick={() => removeTime(addedTime)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default RegisterTime