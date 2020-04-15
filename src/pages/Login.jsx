import React, { Component } from 'react';
import './Login.scss';
import { login } from '../utils/auth';
import Default from '../layouts/Default';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  state = {
    user: {
      username: '',
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
    login(this.state.user)
      .then(() => {
        this.setState(
          {
            error: null,
          },
          () => {
            this.props.history.push('/join');
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
        <div className="Login">
          <div className="login-title">Welcome back!.</div>
          <form className="login-form">
            <div className="form-group">
              <label for="exampleInputEmail1">Username</label>
              <input
                onChange={this.handleInputChange}
                value={this.state.username}
                type="text"
                className="form-control"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn-desktop btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Default>
    );
  }
}

export default Login;
