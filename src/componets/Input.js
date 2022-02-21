//libs
import React from 'react';
//comps
//styles
//data

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focus: false };
  }

  render() {
    const classes = `input ${this.props.classes}`;

    return (
      <input
        id={this.props.id}
        className={classes}
        type={this.props.type}
        placeholder={this.props.placeholder}
        aria-label={this.props.id}
        describedby={this.props.describedby}
      />
    );
  }
}

export default Input;
