//libs
import React from 'react';
//comps
//styles
//data

class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = `label ${this.props.classes}`;

    return (
      <label htmlFor={this.props.for} className={classes}>
        {this.props.text}
      </label>
    );
  }
}

export default Label;
