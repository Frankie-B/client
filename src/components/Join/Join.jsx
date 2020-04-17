import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout';
import './Join.css';

export default function Join(props) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  return (
    <div className="joinOuterContainer">
      <Logout {...props} />
      <div className="joinInnerContainer">
        <h1 className="heading">Join a room</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
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
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={'button mt-20'} type="submit">
            Join A Room
          </button>
        </Link>
      </div>
    </div>
  );
}
