import React, { Component } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-end">
        <div className="navbar-brand">
          <Link to="/" className="nav-logo">
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
        </div>

        <div
          className="nav-btn-container collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <form className="btn-container form-inline my-2 my-lg-0">
            <Link to="/signup">
              <button className="btn btn-primary my-sm-0 p-2 d-none d-lg-block">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="btn btn-light my-2 my-sm-0 d-none d-lg-block">
                Log In
              </button>
            </Link>
          </form>
        </div>
      </nav>
    );
  }
}

export default Nav;
