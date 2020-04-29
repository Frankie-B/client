import React, { Component } from 'react';
import Default from '../../layouts/Default';
import './Signup.scss';

class Signup extends Component {
  render() {
    return (
      <Default className="default-container">
        <div className="Signup wrapper">
          <div className="signup-form-wrapper">
            <h1 className="signup-heading">Create Account</h1>
            <form
              onSubmit={this.handleSignupClick}
              className="signup-form"
              noValidate
            >
              <div className="first-name">
                <label htmlFor="first-name" className="input-label first-name">
                  First Name
                </label>
                <input
                  onChange={this.handleInputChange}
                  type="text"
                  name="firstName"
                  className=""
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="last-name">
                <label htmlFor="last-name" className="input-label last-name">
                  Last Name
                </label>
                <input
                  onChange={this.handleInputChange}
                  type="text"
                  name="lastName"
                  className=""
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="email">
                <label htmlFor="email" className="input-label email">
                  Email
                </label>
                <input
                  onChange={this.handleInputChange}
                  type="email"
                  name="email"
                  className=""
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div className="username">
                <label htmlFor="username" className="input-label username">
                  Username
                </label>
                <input
                  onChange={this.handleInputChange}
                  type="text"
                  name="username"
                  className=""
                  placeholder="Choose a username"
                  required
                />
              </div>
              <div className="password">
                <label htmlFor="password" className="input-label password">
                  Password
                </label>
                <input
                  onChange={this.handleInputChange}
                  type="password"
                  name="password"
                  className=""
                  placeholder="Password"
                  required
                />
              </div>
              <div className="create-account">
                <button className="signup-btn" type="submit">
                  Create Account
                </button>
                <small className="login-prompt">
                  Already have an Account?{' '}
                  <a href="/login" className="signup-link">
                    Log In
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

export default Signup;
