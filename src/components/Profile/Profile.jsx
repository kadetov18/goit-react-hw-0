import css from "./Profile.module.css";

function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.containerProfile}>
      <div className={css.profile}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.statName}>Followers</span>
          <span className={css.statData}>{followers}</span>
        </li>
        <li>
          <span className={css.statName}>Views</span>
          <span className={css.statData}>{views}</span>
        </li>
        <li>
          <span className={css.statName}>Likes</span>
          <span className={css.statData}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
