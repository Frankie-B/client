import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormText } from 'react-bootstrap';
import { signup } from '../utils/auth';

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
      <div className="Signup">
        <Container>
          <h1 className="Signup-title">Sign up</h1>
          <div className="form-container">
            <Form>
              <FormGroup controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <FormControl
                  size="sm"
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  required
                />
                <FormText className="text-muted">
                  Can only contain alphabetic characters.
                </FormText>
              </FormGroup>

              <FormGroup controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <FormControl
                  size="sm"
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  required
                />
                <FormText className="text-muted">
                  Can only contain alphabetic characters.
                </FormText>
              </FormGroup>

              <FormGroup controlId="formBasicEmail">
                <Form.Label>email</Form.Label>
                <FormControl
                  size="sm"
                  type="email"
                  placeholder="Enter a username"
                  name="email"
                  required
                />
                <FormText className="text-muted">
                  Must be a valid email.
                </FormText>
              </FormGroup>

              <FormGroup controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <FormControl
                  size="sm"
                  type="text"
                  placeholder="Enter a username"
                  name="username"
                  required
                />
                <FormText className="text-muted">
                  Can only contain letters, numbers and underscores characters.
                </FormText>
              </FormGroup>

              <FormGroup controlId="formBasicPassword">
                <FormLabel>Password</FormLabel>
                <FormControl
                  size="sm"
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </FormGroup>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Signup;
