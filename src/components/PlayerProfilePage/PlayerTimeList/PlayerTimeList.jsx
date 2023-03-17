import { useSelector } from "react-redux";

const PlayerTimeList = () => {
    const userTimes = useSelector((store) => store.userTimesReducer);

    return (
        <div>
            <ul>
                <h3>Availabilities</h3>
                {userTimes.map((userTime) => (
                    <p key={userTime.start_time}>
                        {userTime.day}: {userTime.start_time} - {userTime.end_time}
                    </p>
                ))}
            </ul>
        </div>
    )
}

export default PlayerTimeList;