import React, { Component } from 'react';
import { logout } from '../utils/auth';
import { Link } from 'react-router-dom';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    // This function sends a message to the backend to tell it to destroy the session.
    //After the promise is resolved the clearUser function gets called (which clears the localStorage)
    logout()
      .then((response) => {
        debugger;
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
