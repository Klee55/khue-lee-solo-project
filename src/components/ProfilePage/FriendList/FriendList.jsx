import { useSelector } from "react-redux";

const FriendList = () => {
    const friends = useSelector((store) => store.fetchFriendsReducer);

    return (
        <div>
            <ul>
                <h3>Friends</h3>
                {friends.map((friend) => (
                    <p key={friend.username}>
                        {friend.username}
                    </p>
                ))}
            </ul>
        </div>
    )
}

export default FriendList;