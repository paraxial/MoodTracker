import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  constructor() {
    super();
    this.handleBlur = this.handleBlur.bind(this);
    this.change = this.change.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.changeFocus = this.changeFocus.bind(this);

    this.state = {
      focus: false,
    };
  }

  handleBlur(event) {
    const { value } = this.props;
    if(!value || value.length === 0) {
      this.changeFocus(false);
      return;
    }
    this.changeFocus(true);
  }

  handleFocus(event) {
    this.changeFocus(true);
  }

  change(event) {
    this.props.callback(event.target.id, event.target.value);
  }

  changeFocus(newValue) {
    this.setState({...this.state, focus: newValue});
  }

  render() {
    const { label, name, type, value, callback } = this.props;
    const { focus } = this.state;
    const focusedClass = focus ? ' focus' : '';

    return(
      <div className="input-wrapper">
        <label htmlFor={name} className={`input-label${focusedClass}`}>
          {label}
        </label>
        <input
          className={`text-input${focusedClass}`}
          type={type}
          id={name}
          onChange={this.change}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
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
