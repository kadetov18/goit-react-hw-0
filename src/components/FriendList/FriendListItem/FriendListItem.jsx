import css from "./FriendListItem.module.css";
import clsx from "clsx";

function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={clsx(css.friend)}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={clsx(css.name)}>{name}</p>
      <p className={clsx(isOnline ? css.online : css.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
