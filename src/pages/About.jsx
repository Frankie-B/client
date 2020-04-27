import React, { Component } from 'react';
import Default from '../layouts/Default';
import './About.scss';

class About extends Component {
  render() {
    return (
      <Default>
        <div className="About">
          <h1 className="about-heading">
            At the <span className="about-highlight">heart</span> of Mentally.me
            is a <span className="about-highlight">simple</span> idea.
          </h1>
          <h2 className="about-subheading">KIND WORDS</h2>
          <p className="about-text">
            We live in a very interconnected world and yet at the same time for
            a lot of people that means feeling even more isolated. But what if
            at its core a platform existed that aimed to put people and human
            connection first. What if the idea of helping someone undergoing
            difficulties, struggling through hard times, or needing someone to
            talk to was built into the core of a platform? We all go through ups
            and downs, and we all should have someone who is in our corner, to
            share those experiences with. We should feel like we can be our
            authentic self, in a world that asks us to curate so much of our
            lives all the time. Sometimes a kind word from a stranger can be the
            deciding factor that turns another person's day around. One of the
            primary goals of Mentally.me is to offer a simpler platform where
            people can share how they feel, (the good and the bad) and to allow
            others to be there for others. We feel it is time we try and change
            the sort of conversations we have with ourselves and with each other
            online. To offer a place where people can find a connection,
            community, and compassion. Sometimes all it takes to better
            someone's day is a kind word. So, let's brave the storm together.
          </p>
        </div>
      </Default>
    );
  }
}

export default About;
