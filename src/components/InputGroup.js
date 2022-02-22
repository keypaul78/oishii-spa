//libs
import React from 'react';
//comps
//styles
//data

class InputGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="input--group">{this.props.children}</div>;
  }
}

export default InputGroup;
