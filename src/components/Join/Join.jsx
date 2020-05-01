import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser, logout } from '../../utils/auth';
import './Join.css';

export default function Join(props) {
  // const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  let user = getUser();

  const handleLogout = (props) => {
    logout()
      .then((response) => {
        props.history.push('/');
      })
      .catch((error) => {
        console.log('logout error', error);
      });
  };

  return (
    <div className="joinOuterContainer">
      <h1 className="join-welcome">Welcome back {user.username}</h1>
      <div className="joinInnerContainer">
        <h1 className="heading">Join a room</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            readOnly={user.username}
            hidden
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!user.username || !room ? e.preventDefault() : null)}
          to={`/chat?name=${user.username}&room=${room}`}
        >
          <button className={'button mt-20'} type="submit">
            Join Room
          </button>
        </Link>
        <Link onClick={handleLogout} to="/">
          <button className={'button logout mt-20'} type="submit">
            Log out
          </button>
        </Link>
      </div>
    </div>
  );
}
