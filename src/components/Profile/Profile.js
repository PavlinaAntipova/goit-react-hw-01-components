import PropTypes from 'prop-types';
import React from 'react';

import s from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <section>
      <h2>1 - Профиль социальной сети</h2>
      <div className={s.profile}>
        <div className={s.infoBox}>
          <img src={avatar} alt="User avatar" width="150" height="150" />
          <div className={s.info}>
            <p className={s.name}>{username}</p>
            <p className={s.tag}>{`@${tag}`}</p>
            <p className={s.place}>{location}</p>
          </div>
        </div>

        <ul className={s.statList}>
          <li className={s.statItem}>
            <span>Followers</span>
            <span className={s.statNumber}>{stats.followers}</span>
          </li>
          <li className={s.statItem}>
            <span>Views</span>
            <span className={s.statNumber}>{stats.views}</span>
          </li>
          <li className={s.statItem}>
            <span>Likes</span>
            <span className={s.statNumber}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
