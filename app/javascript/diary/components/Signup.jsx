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
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(field, value) {
    this.setState({ ...this.state, [field]: value });
  }

  render() {
    const { email, password, confirmPassword } = this.state.user;

    return (
        <React.Fragment>
          <h2 className="heading">
            Signup
          </h2>
          <div className="form-wrapper">
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
          </div>
        </React.Fragment>
      );
  }
}

export default Signup;
