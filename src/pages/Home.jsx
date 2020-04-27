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
            <div className="home-img-container">
              <img
                src="https://res.cloudinary.com/frankie-dev/image/upload/v1586406741/images/leftBrain.svg"
                alt=""
                className="home-img brain-left"
              />
              <img
                src="https://res.cloudinary.com/frankie-dev/image/upload/v1586406741/images/rightBrain.svg"
                alt=""
                className="home-img brain-right"
              />
            </div>
            <Link to="/signup" className="btn-left">
              <button className={'home-btn btn-mobile signup mt-20 d-lg-none'}>
                Sign Up
              </button>
            </Link>
            <Link to="/login" className="btn-right">
              <button className={'home-btn btn-mobile login mt-20 d-lg-none'}>
                Log In
              </button>
            </Link>
          </div>
        </div>
      </Default>
    );
  }
}

export default Home;
