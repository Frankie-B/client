import React, { Component } from 'react';
import './Default.scss';
import ParticleBackground from '../components/ParticleBackground';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar/SideBar';
import Backdrop from '../components/Backdrop/Backdrop';

class Default extends Component {
  state = {
    sideBarOpen: false,
  };

  toggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideBarOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideBarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="Default">
        <NavBar toggleClickHandler={this.toggleClickHandler} />
        <SideBar show={this.state.sideBarOpen} />
        {backdrop}
        <ParticleBackground />
        <div className="default-img-container">
          <img
            src="https://res.cloudinary.com/frankie-dev/image/upload/v1586406741/images/leftBrain.svg"
            alt=""
            className="default-img brain-left"
          />
          <img
            src="https://res.cloudinary.com/frankie-dev/image/upload/v1586406741/images/rightBrain.svg"
            alt=""
            className="default-img brain-right"
          />
        </div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Default;
