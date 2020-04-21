import React, { Component } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <img
            src="https://res.cloudinary.com/frankie-dev/image/upload/v1586406741/images/leftBrain.svg"
            alt=""
            className="nav-img nav-img-brain-left"
          />
          <img
            src="https://res.cloudinary.com/frankie-dev/image/upload/v1586406741/images/rightBrain.svg"
            alt=""
            className="nav-img nav-img-brain-right"
          />
        </Link>

        <div className="nav-btn-container collapse navbar-collapse">
          <Link to="/signup">
            <button className="btn btn-primary my-2 my-sm-0 d-none d-lg-block ">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="nav-btn-container collapse navbar-collapse">
          <Link to="/login">
            <button className="btn btn-light my-2 my-sm-0 d-none d-lg-block ">
              Log In
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
