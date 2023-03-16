import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const EditTime = () => {
    const user = useSelector(store => store.user);
    const userTimes = useSelector((store) => store.userTimesReducer);
    const days = useSelector((store) => store.dayReducer);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [day, setDay] = useState('');
    // const [matchedTimeChoice, setMatchedTimeChoice] = useState('')
    // const [timeId, setTimeId] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    // fetch games and user info on load
    useEffect(() => {
        dispatch({ type: 'FETCH_DAYS' });
        dispatch({
            type: 'FETCH_PROFILE',
            payload: user.id
        });
    }, []);

    const addTime = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_USER_TIME',
            payload: {
                day: day,
                startTime: startTime,
                endTime: endTime,
                user_id: user.id
            }
        });
        history.push('/edit');
    };

    const removeTime = (userTime) => {
        // console.log('removeTime button clicked:', userTime);
        dispatch({
            type: 'REMOVE_USER_TIME',
            payload: userTime.id
        });
        history.push('/edit');
    }

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
                Availabilities:
                {userTimes.map((userTime) => (
                    <li key={userTime.start_time}>
                        {userTime.day}: {userTime.start_time} - {userTime.end_time}
                        <button onClick={() => removeTime(userTime)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EditTime;