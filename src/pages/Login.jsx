import React, { Component } from 'react';
import './Login.scss';
import { login } from '../utils/auth';
import Default from '../layouts/Default';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  state = {
    username: '',
    password: '',
  };

  handleInputChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleLoginClick(event) {
    event.preventDefault();
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
        <div className="Login">
          <div className="login-title">Welcome back!</div>
          <form onSubmit={this.handleLoginClick} className="login-form">
            <div className="form-group">
              <label>Username</label>
              <input
                onChange={this.handleInputChange}
                value={this.state.username}
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter username"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                onChange={this.handleInputChange}
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                required
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
