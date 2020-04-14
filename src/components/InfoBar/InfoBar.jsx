import React from 'react';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img
        className="onlineIcon"
        src="https://res.cloudinary.com/frankie-dev/image/upload/v1586767994/images/onlineIcon.png"
        alt="online icon"
      />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img
          src="https://res.cloudinary.com/frankie-dev/image/upload/v1586768004/images/closeIcon.png"
          alt="close icon"
        />
      </a>
    </div>
  </div>
);

export default InfoBar;
