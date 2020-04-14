import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
      },
    };
  }

  render() {
    return (
      <div className="Signup">
        <h1 className="Signup-title">Sign up</h1>
      </div>
    );
  }
}

export default Signup;
