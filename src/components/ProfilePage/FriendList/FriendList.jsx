import { useSelector } from "react-redux";

const FriendList = () => {
    const friends = useSelector((store) => store.fetchFriendsReducer);

    return (
        <div>
            <ul>
                Friend List:
                {friends.map((friend) => (
                    <li key={friend.username}>
                        {friend.username}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FriendList;