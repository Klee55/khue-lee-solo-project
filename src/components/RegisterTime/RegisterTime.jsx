import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterTime = () => {

    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const dispatch = useDispatch();
    const addedTime = useSelector(store => store.timeReducer);
    const user = useSelector(store => store.user);


    // send time input to timeReducer and clear input
    const addTime = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_TIME',
            payload: {
                startTime: startTime,
                endTime: endTime,
                user_id: user.id
            }
        });
        setStartTime('');
        setEndTime('');
    };

    // remove selected time when remove button is clicked
    const removeTime = (addedTime) => {
        dispatch({
            type: 'REMOVE_TIME',
            payload: addedTime
        });
    };

    return (
        <div>
            <div>
                <label htmlFor="start-time">
                    Start Time:
                    <input
                        type="time"
                        name="star-time"
                        value={startTime}
                        // required
                        onChange={(event) => setStartTime(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="end-time">
                    End Time:
                    <input
                        type="time"
                        name="end-time"
                        value={endTime}
                        // required
                        onChange={(event) => setEndTime(event.target.value)}
                    />
                </label>
                <button onClick={addTime}>
                    Add Time
                </button>
            </div>
            <ul>
                {addedTime.map((addedTime) => (
                    <li key={addedTime.startTime}>
                        {addedTime.startTime} - {addedTime.endTime}
                        <button onClick={() => removeTime(addedTime)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RegisterTime