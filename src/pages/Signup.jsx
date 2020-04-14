import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
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
              <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  pattern="^[A-Za-z]+$"
                  required
                />
                <FormText className="text-muted">
                  Can only contain alphabetic characters.
                </FormText>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  pattern="^[A-Za-z]+$"
                  required
                />
                <FormText className="text-muted">
                  Can only contain alphabetic characters.
                </FormText>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>email</Form.Label>
                <Form.Control
                  size="sm"
                  type="email"
                  placeholder="Enter a username"
                  name="email"
                  pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                  required
                />
                <FormText className="text-muted">
                  Must be a valid email.
                </FormText>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <FormControl
                  size="sm"
                  type="text"
                  placeholder="Enter a username"
                  name="username"
                  pattern="[A-Za-z0-9_]{1,15}"
                  required
                />
                <FormText className="text-muted">
                  Can only contain letters, numbers and underscores characters.
                  Max 15.char
                </FormText>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  size="sm"
                  type="password"
                  placeholder="Password"
                  name="password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  required
                />
              </Form.Group>

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
