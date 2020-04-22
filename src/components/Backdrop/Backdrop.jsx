import React from 'react';
import './Backdrop.scss';

const Backdrop = (props) => {
  return <div className="Backdrop" onClick={props.click}></div>;
};

export default Backdrop;
