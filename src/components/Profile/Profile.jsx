import css from "./Profile.module.css";
import clsx from "clsx";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.item}>
      <div>
        <img className={css.icon} src={image} alt={name} />
        <p className={css.text}>{name}</p>
        <p className={css.text1}>@{tag}</p>
        <p className={css.text1}>{location}</p>
      </div>

      <ul className={css.dataUl}>
        <li className={css.list}>
          <span className={clsx(css.text2, css.marginTop)}>Followers</span>
          <span className={css.text}>{stats.followers}</span>
        </li>
        <li className={css.list}>
          <span className={clsx(css.text2, css.marginTop)}>Views</span>
          <span className={css.text}>{stats.views}</span>
        </li>
        <li className={css.listLast}>
          <span className={clsx(css.text2, css.marginTop)}>Likes</span>
          <span className={css.text}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
