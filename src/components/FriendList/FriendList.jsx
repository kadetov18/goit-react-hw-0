import FriendListItem from "./FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
import clsx from "clsx";

function FriendList({ friends }) {
  return (
    <ul className={clsx(css.friendlist)}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
