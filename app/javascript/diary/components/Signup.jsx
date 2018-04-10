import React from 'react';
import TextInput from './TextInput';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: null,
        password: null,
        confirmPassword: null,
      },
      errors: {
        emailMessage: null,
        passwordMessage: null,
        confirmPasswordMessage: null,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(field, value) {
    const newUser = { ...this.state.user, [field]: value };
    this.setState({ ...this.state, user: newUser });
  }

  render() {
    const { email, password, confirmPassword } = this.state.user;

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
              callback={this.handleInputChange}
            />
            <TextInput
              name="password"
              label="password"
              type="password"
              value={password}
              callback={this.handleInputChange}
            />
            <TextInput
              name="confirmPassword"
              label="confirm password"
              type="password"
              value={confirmPassword}
              callback={this.handleInputChange}
            />
            <input type="submit" className="action-button" value="Create Account"/>
          </form>
        </React.Fragment>
      );
  }
}

export default Signup;
