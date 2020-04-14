import React from 'react';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Mentally Me</h1>
      <h2>A simple chat app in time of quarantine</h2>
      <h2>Just because we are isolated does not mean you we are alone</h2>
    </div>
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img
                  alt="Online Icon"
                  src="https://res.cloudinary.com/frankie-dev/image/upload/v1586767994/images/onlineIcon.png"
                />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
