import React from 'react';
import './SideBarToggle.scss';

const SideBarToggle = (props) => {
  return (
    <button className="Toggle-btn" onClick={props.click}>
      <div className="toggle-btn-line"></div>
      <div className="toggle-btn-line"></div>
      <div className="toggle-btn-line"></div>
    </button>
  );
};

export default SideBarToggle;
