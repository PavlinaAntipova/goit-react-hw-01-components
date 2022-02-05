import React from 'react';

import s from './App.module.css';
import Profile from '../components/Profile/Profile';
import user from '../user/user.json';

function App() {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}

export default App;
