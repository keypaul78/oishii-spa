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
    return (
      <img
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src={this.props.src}
        alt={this.props.alt}
        className="lazy"
      />
    );
  }
}

export default Image;
