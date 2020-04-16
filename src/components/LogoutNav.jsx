import React, { Component } from 'react';
import './LogoutNav.scss';

class Logout extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-end">
        <Link to="/" className="navbar-brand">
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

        <div
          className="nav-btn-container collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <form className="btn-container form-inline my-2 my-lg-0">
            <Link to="/login">
              <button className="btn btn-light btn-lg my-2 my-sm-0 d-none d-lg-block">
                Log Out
              </button>
            </Link>
          </form>
        </div>
      </nav>
    );
  }
}

export default Logout;
