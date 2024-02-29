import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "./FriendList.module.css";

export default function FriendList(friends) {
  return (
    <ul className={css.container}>
      {friends.friends.map((friend) => {
        return (
        < li key = { friend.id } >
          <FriendListItem friend={friend} />
        </ li>)
})}
    </ul>
  );
}
