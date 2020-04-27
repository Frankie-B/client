import React, { Component } from 'react';
import './Home.scss';
import Default from '../layouts/Default';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Default>
        <div className="Home">
          <h1 className="home-title">Mentally.me</h1>
          <div className="home-mobile-btns">
            <Link to="/signup" className="btn-left">
              <button className="btn btn-primary btn-md d-lg-none">
                Sign Up
              </button>
            </Link>
            <Link to="/login" className="btn-right">
              <button className="btn btn-light btn-md d-lg-none">Log In</button>
            </Link>
          </div>
        </div>
      </Default>
    );
  }
}

export default Home;
