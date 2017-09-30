import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    // bound functions
    this.compileFormData = this.compileFormData.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);

    // component state
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      username: '',

    };
  }
  // update state as email value changes
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  // catch enter clicks
  handleKeyPress(target) {
    if (target.charCode === 13) {
      this.compileFormData();
    }
  }

  // update state as password value changes
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  // update state as password value changes
  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }

  // update state as password value changes
  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  // update state as password value changes
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  compileFormData() {
    console.log(this.props);
    const { registerFunction } = this.props;
    const formData = this.state;
    registerFunction(formData);
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10 col-sm-7 col-md-5 col-lg-4">
          <Form>
            <FormGroup>
              <Label for="exampleUsername">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleUsernameChange}
                onKeyPress={this.handleKeyPress}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="userEmail"
                placeholder="noreply@musiclist.com"
                value={this.state.email}
                onChange={this.handleEmailChange}
                onKeyPress={this.handleKeyPress}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFirstName">First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
                onKeyPress={this.handleKeyPress}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFistName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleLastNameChange}
                onKeyPress={this.handleKeyPress}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="userPassword"
                placeholder="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                onKeyPress={this.handleKeyPress}
              />
            </FormGroup>
            <Button onClick={this.compileFormData}>Register</Button>
          </Form>
        </div>
      </div>
    );
  }
}
