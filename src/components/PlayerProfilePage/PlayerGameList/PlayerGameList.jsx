import { useSelector } from "react-redux";

const PlayerGameList = () => {
    const userGames = useSelector((store) => store.userGamesReducer);

    return (
        <div>
            <ul>
                <h3>Games</h3>
                {userGames.map((userGame) => (
                    <p key={userGame.game}>
                        {userGame.game}
                    </p>
                ))}
            </ul>
        </div>
    )
}

export default PlayerGameList;