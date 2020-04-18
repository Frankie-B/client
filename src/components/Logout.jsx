import React, { Component } from 'react';
import { logout } from '../utils/auth';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    logout()
      .then((response) => {
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log('logout error', error);
      });
  }

  render() {
    return (
      <div className="Logout">
        <button
          onClick={this.handleLogout}
          className="joinButton btn btn-light btn-lg"
        >
          Log out
        </button>
      </div>
    );
  }
}

export default Logout;
