import React, { Component } from 'react';
import Default from '../layouts/Default';

class Home extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {};
  // }

  render() {
    return (
      <Default>
        <div className="Home">
          <h1 className="Home-title">Mentally.me</h1>
        </div>
      </Default>
    );
  }
}

export default Home;
