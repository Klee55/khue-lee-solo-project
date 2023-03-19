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
            <h3>Availabilities</h3>
            <div className="timeItem">
                <label className="day" htmlFor="day">
                    Day:
                </label>
                <select
                    type="text"
                    value={day}
                    onChange={(event) => setDay(event.target.value)}>
                    {days.map((day) => (
                        <option key={day.id}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <br/>
            <div className="timeItem">
                <label className="startTime" htmlFor="start-time">
                    Start Time:
                </label>
                <input
                    type="text"
                    name="star-time"
                    value={startTime}
                    onChange={(event) => setStartTime(event.target.value)}
                />
            </div>
            <div className="timeItem">
                <label className="endTime" htmlFor="end-time">
                    End Time:
                </label>
                <input
                    type="text"
                    name="end-time"
                    value={endTime}
                    onChange={(event) => setEndTime(event.target.value)}
                />
            </div>
            <button onClick={addTime}>
                Add Day and Time
            </button>
            <div className="list">
                <ul>
                    {userTimes.map((userTime) => (
                        <li className="listItem" key={userTime.start_time}>
                            {userTime.day}: {userTime.start_time} - {userTime.end_time}
                            <button onClick={() => removeTime(userTime)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default EditTime;