import PropTypes from 'prop-types';
import React from 'react';

import s from './FriendListItem.module.css';

function FriendListItem(props) {
  const { avatar, name, isOnline, id } = props.description;

  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.online : s.offline}></span>
      <div className={s.avatarBox}>
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      </div>
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendListItem;
