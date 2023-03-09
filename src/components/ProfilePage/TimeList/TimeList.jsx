import { useSelector } from "react-redux";

const TimeList = () => {
    const userTimes = useSelector((store) => store.userTimesReducer);

    return (
        <ul>
            Availabilities:
            {userTimes.map((userTime) => (
                <li key={userTime.start_time}>
                    {userTime.start_time} To {userTime.end_time}
                </li>
            ))}
        </ul>
    )
}

export default TimeList;