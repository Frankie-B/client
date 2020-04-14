import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-end">
        <a class="navbar-brand" href="#">
          Navbar
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline my-2 my-lg-0">
            <button
              class="btn btn-primary my-2 my-sm-0 d-none d-md-block"
              type="submit"
            >
              Sign Up
            </button>
            <button
              class="btn btn-light my-2 my-sm-0 d-none d-md-block"
              type="submit"
            >
              Log In
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Nav;
