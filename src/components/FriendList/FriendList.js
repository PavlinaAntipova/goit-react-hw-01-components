import PropTypes from 'prop-types';
import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';

import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <section>
      <h2>3 - Список друзей</h2>
      <ul className={s.list}>
        {friends.map(friend => (
          <FriendListItem description={friend} />
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
