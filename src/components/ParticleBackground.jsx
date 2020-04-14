import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './ParticleBackground.scss';

class ParticlesBackground extends Component {
  render() {
    return (
      <div id="Particles-bg" className="ParticlesBackground">
        <Particles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 2.0,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
        />
      </div>
    );
  }
}

export default ParticlesBackground;
