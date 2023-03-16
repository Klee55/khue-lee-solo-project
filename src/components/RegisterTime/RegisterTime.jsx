import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterTime = () => {

    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [day, setDay] = useState('');
    const dispatch = useDispatch();
    const addedTime = useSelector(store => store.timeReducer);
    const user = useSelector(store => store.user);
    const days = useSelector(store => store.dayReducer);

    // fetch days on load
    useEffect(() => {
        dispatch({ type: 'FETCH_DAYS' });
    }, []);

    // send time input to timeReducer and clear input
    const addTime = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_TIME',
            payload: {
                day: day,
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
                <label htmlFor="day">
                    Day:
                    <select
                        // placeholder 
                        type="text"
                        value={day}
                        onChange={(event) => setDay(event.target.value)}>
                        {days.map((day) => (
                            <option key={day.id}>
                                {day.day}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label htmlFor="start-time">
                    Start Time:
                    <input
                        type="text"
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
                        type="text"
                        name="end-time"
                        value={endTime}
                        // required
                        onChange={(event) => setEndTime(event.target.value)}
                    />
                </label>
                <button onClick={addTime}>
                    Add Day and Time
                </button>
            </div>
            <ul>
                {addedTime.map((addedTime) => (
                    <li key={addedTime.day}>
                        {addedTime.day}: {addedTime.startTime} - {addedTime.endTime}
                        <button onClick={() => removeTime(addedTime)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RegisterTime