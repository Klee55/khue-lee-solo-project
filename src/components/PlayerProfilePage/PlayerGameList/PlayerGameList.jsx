import { useSelector } from "react-redux";

const PlayerGameList = () => {
    const userGames = useSelector((store) => store.userGamesReducer);

    return (
        <div>
            <ul>
                List of Games:
                {userGames.map((userGame) => (
                    <li key={userGame.game}>
                        {userGame.game}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PlayerGameList;