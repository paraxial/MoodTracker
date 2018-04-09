import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }

  change(event) {
    this.props.callback(event.target.id, event.target.value);
  }

  render() {
    const { label, name, type, value, callback } = this.props;

    return(
      <div className="input-wrapper">
        <label htmlFor={name}>
          {label}
        </label>
        <input
          className="text-input"
          type={type}
          id={name}
          onChange={this.change}
        />
      </div>
    )
  };
}


TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  callback: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['password', 'email', 'text', 'number', 'tel']).isRequired,
};

export default TextInput;
