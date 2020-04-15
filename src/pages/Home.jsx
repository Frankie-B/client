import React, { Component } from 'react';
import './Home.scss';
import Default from '../layouts/Default';

class Home extends Component {
  render() {
    return (
      <Default>
        <div className="Home">
          <h1 className="home-title">Mentally.me</h1>
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
        </div>
      </Default>
    );
  }
}

export default Home;
