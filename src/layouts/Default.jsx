import React from 'react';
import './Default.scss';
import ParticleBackground from '../components/ParticleBackground';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Default = (props) => {
  return (
    <div className="Default">
      <Nav />
      <ParticleBackground />
      {props.children}
      <Footer />
    </div>
  );
};

export default Default;
