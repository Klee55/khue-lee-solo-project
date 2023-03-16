import { useSelector } from "react-redux";

const PlayerTimeList = () => {
    const userTimes = useSelector((store) => store.userTimesReducer);

    return (
        <div>
            <ul>
                Availabilities:
                {userTimes.map((userTime) => (
                    <li key={userTime.start_time}>
                        {userTime.start_time} - {userTime.end_time}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PlayerTimeList;