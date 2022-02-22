//libs
import React from 'react';
//comps
//styles
//data

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <img src={this.props.src} alt={this.props.alt} />;
  }
}

export default Image;
