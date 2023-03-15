import { useSelector } from "react-redux";


const PlayerPlaystyleList = () => {
    const userPlaystyles = useSelector((store) => store.userPlaystylesReducer)

    return (
        <div>
            <ul>
                List of Playstyles:
                {userPlaystyles.map((userPlaystyle) => (
                    <li key={userPlaystyle.style}>
                        {userPlaystyle.style}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PlayerPlaystyleList;