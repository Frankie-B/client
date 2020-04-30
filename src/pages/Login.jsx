import React, { Component } from 'react';
import { login } from '../utils/auth';
import Default from '../layouts/Default';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    username: '',
    password: '',
  };

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    login(this.state)
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
        <div className="Login wrapper">
          <div className="login-form-wrapper">
            <h1>Log In</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="username">
                <label htmlFor="username">Username</label>
                <input
                  placeholder="Choose a username"
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="login-account">
                <button type="submit">Log In</button>
                <small>
                  Don't have an account?
                  <a href="/signup" className="login-link">
                    Create Account
                  </a>
                </small>
              </div>
            </form>
          </div>
        </div>
      </Default>
    );
  }
}

export default Login;
