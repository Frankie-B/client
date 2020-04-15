import React, { Component } from 'react';
// import './Signup.scss';
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
    let userCopy = { ...this.state.user };
    userCopy[e.target.name] = e.target.value;
    this.setState({
      user: userCopy,
    });
  }

  handleSignupClick() {
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
        <div className="Signup container">
          <h1 className="Signup-title">Sign up</h1>
          <div className="form-container">
            <form className="signup-form">
              <div className="form-group">
                <label for="exampleInputEmail1">First name</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.firstName}
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Enter First Name"
                  name="firstName"
                  pattern="^[A-Za-z]+$"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  Can only contain alphabetic characters.
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Last name</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.lastName}
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  pattern="^[A-Za-z]+$"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  Can only contain alphabetic characters.
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.email}
                  className="form-control form-control-sm"
                  type="email"
                  placeholder="you@address.com"
                  name="email"
                  pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.username}
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Enter a username"
                  name="username"
                  pattern="[A-Za-z0-9_]{1,15}"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  Can only contain letters, numbers and underscores characters.
                  Max 15.char
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.password}
                  className="form-control form-control-sm"
                  type="password"
                  placeholder="Password"
                  name="password"
                  pattern="[A-Za-z0-9]+$"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  Can only contain letters and numbers. Min 5.char
                </small>
              </div>

              <button type="submit" className="btn btn-primary">
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
