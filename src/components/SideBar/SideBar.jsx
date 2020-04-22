import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

const SideBar = (props) => {
  let sideBarClasses = 'SideBar';

  if (props.show) {
    sideBarClasses = 'SideBar open';
  }
  return (
    <nav className={sideBarClasses}>
      <ul className="sideBar-items">
        <li className="sideBar-link">
          <Link to="/" className="sideBar-link">
            Home
          </Link>
        </li>
        <li className="sideBar-link">
          <Link to="/about" className="sideBar-link">
            About
          </Link>
        </li>
        <li className="sideBar-link">
          <Link to="signup" className="sideBar-link">
            signup
          </Link>
        </li>
        <li className="sideBar-link">
          <Link to="login" className="sideBar-link">
            Log In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
