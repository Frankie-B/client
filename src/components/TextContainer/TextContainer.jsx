import React from 'react';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1 className="text-container-title">This is a safe space</h1>
    </div>
    {users ? (
      <div>
        <h3 className="text-container-users">People currently chatting:</h3>
        <div className="activeContainer">
          <h2 className="text-container-subheading">
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
