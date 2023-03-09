import { useSelector } from "react-redux";

const GameList = () => {
    const userGames = useSelector((store) => store.userGamesReducer);

    return (
        <ul>
            List of Games:
            {userGames.map((userGame) => (
                <li key={userGame.game}>
                    {userGame.game}
                </li>
            ))}
        </ul>
    )
}

export default GameList;