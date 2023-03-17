import { useSelector } from "react-redux";


const PlaystyleList = () => {
    const userPlaystyles = useSelector((store) => store.userPlaystylesReducer)

    return (
        <div>
            <ul>
                <h3>Playstyles</h3>
                {userPlaystyles.map((userPlaystyle) => (
                    <p key={userPlaystyle.style}>
                        {userPlaystyle.style}
                    </p>
                ))}
            </ul>
        </div>
    )
}

export default PlaystyleList;