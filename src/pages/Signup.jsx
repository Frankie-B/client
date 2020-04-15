import React, { Component } from 'react';
import './Signup.scss';
import { signup } from '../utils/auth';
import Default from '../layouts/Default';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  state = {
    user: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    },
    error: null,
  };

  handleInputChange(e) {
    e.preventDefault();
    let userCopy = { ...this.state.user };
    userCopy[e.target.name] = e.target.value;
    this.setState({
      user: userCopy,
    });
  }

  handleSignupClick(e) {
    e.preventDefault();
    signup(this.state.user)
      .then(() => {
        this.setState(
          {
            error: null,
          },
          () => {
            this.props.history.push('/user/profile');
          }
        );
      })
      .catch((error) => {
        this.setState({ error: error.response && error.response.data });
      });
  }

  render() {
    return (
      <Default>
        <div className="Signup">
          <div className="form-container">
            <h1 className="Signup-title">Sign up</h1>
            <form className="signup-form">
              <div className="form-group">
                <label>First name</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.firstName}
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  name="firstName"
                  pattern="^[A-Za-z]+$"
                  required
                />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.lastName}
                  className="form-control"
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  pattern="^[A-Za-z]+$"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.email}
                  className="form-control"
                  type="email"
                  placeholder="you@address.com"
                  name="email"
                  pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                  required
                />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.username}
                  className="form-control"
                  type="text"
                  placeholder="Enter a username"
                  name="username"
                  pattern="[A-Za-z0-9_]{1,15}"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.password}
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  // pattern="[A-Za-z0-9]+$"
                  required
                />
              </div>

              <button type="submit" className="btn-desktop btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Default>
    );
  }
}

export default Signup;
