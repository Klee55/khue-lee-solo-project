import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const EditTime = () => {
    const user = useSelector(store => store.user);
    const userTimes = useSelector((store) => store.userTimesReducer);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [matchedTimeChoice, setMatchedTimeChoice] = useState('')
    const [timeId, setTimeId] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
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
        <>
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
                Availabilities:
                {userTimes.map((userTime) => (
                    <li key={userTime.start_time}>
                        {userTime.start_time} To {userTime.end_time}
                        <button onClick={() => removeTime(userTime)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default EditTime;