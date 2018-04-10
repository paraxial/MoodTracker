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
  }

  handleInputChange(field, value) {
    this.setState({ ...this.state, [field]: value });
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
          <form className="form-wrapper">
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
