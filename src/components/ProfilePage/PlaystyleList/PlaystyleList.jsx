import { useSelector } from "react-redux";


const PlaystyleList = () => {
    const userPlaystyles = useSelector((store) => store.userPlaystylesReducer)

    return (
        <ul>
            List of Playstyles:
            {userPlaystyles.map((userPlaystyle) => (
                <li key={userPlaystyle.style}>
                    {userPlaystyle.style}
                </li>
            ))}
        </ul>
    )
}

export default PlaystyleList;