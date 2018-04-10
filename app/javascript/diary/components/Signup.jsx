import React from 'react';
import TextInput from './TextInput';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      confirmPassword: null,
      emailError: null,
      passwordError: null,
      confirmPasswordError: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.writeErrors = this.writeErrors.bind(this);
  }

  handleInputChange(field, value) {
    this.setState({ ...this.state, [field]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.writeErrors();

    const { emailError, passwordError, confirmPasswordError } = this.state;

    if (emailError || passwordError || confirmPasswordError) { return null; }
  }

  writeErrors() {
    const { email, password, confirmPassword } = this.state;
    let emailError = null, passwordError = null, confirmPasswordError = null;
    if(!this.validEmail(email)) { emailError = 'This is not a valid email'; }
    if(!this.validPassword(password)) { passwordError = 'Password must be 8-128 characters long'; }
    if(!this.matchingPasswords(password, confirmPassword)) {
      confirmPasswordError = 'Must match password';
    }

    this.setState({ ...this.state, emailError, passwordError, confirmPasswordError });
  }

  validEmail(email) {
    if(!email) { return false; }

    return email.match(/^.+@.+$/);
  }

  validPassword(password) {
    if(!password) { return false; }

    return (password.length >= 8 && password.length < 128);
  }

  matchingPasswords(password, confirmPassword) {
    if(!password || !confirmPassword) { return false; }

    return password === confirmPassword;
  }

  render() {
    const {
      email,
      password,
      confirmPassword,
      emailError,
      passwordError,
      confirmPasswordError,
    } = this.state;

    return (
        <React.Fragment>
          <h2 className="heading">
            Signup
          </h2>
          <form className="form-wrapper" onSubmit={this.handleSubmit} noValidate>
            <TextInput
              name="email"
              label="email"
              type="email"
              value={email}
              error={emailError}
              callback={this.handleInputChange}
            />
            <TextInput
              name="password"
              label="password"
              type="password"
              value={password}
              error={passwordError}
              callback={this.handleInputChange}
            />
            <TextInput
              name="confirmPassword"
              label="confirm password"
              type="password"
              value={confirmPassword}
              error={confirmPasswordError}
              callback={this.handleInputChange}
            />
            <input type="submit" className="action-button" value="Create Account"/>
          </form>
        </React.Fragment>
      );
  }
}

export default Signup;
