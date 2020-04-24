import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import SideBarToggle from '../SideBar/SideBarToggle';

const NavBar = (props) => {
  return (
    <header className="NavBar">
      <nav className="NavBar-nav">
        <div className="hamburger-icon">
          <SideBarToggle click={props.toggleClickHandler} />
        </div>

        <div className="NavBar-brand">
          <Link to="/" className="NavBar-link">
            <img
              src="https://res.cloudinary.com/frankie-dev/image/upload/v1586407178/images/logo-noBg.png"
              alt="logo"
              className="NavBar-logo"
            />
          </Link>
        </div>
        <div className="NavBar-spacer"></div>

        <div className="NavBar-items">
          <ul className="NavBar-item">
            <Link to="/about" className="NavBar-link left">
              About
            </Link>
            <Link to="/signup" className="NavBar-link mid">
              Signup
            </Link>
            <Link to="/login" className="NavBar-link right">
              Login
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
