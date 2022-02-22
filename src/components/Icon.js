//libs
import React from 'react';
import Image from './Image';
//comps
//styles
//data

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const iconPath = `./assets/images/icons/${this.props.iconName}.svg`;
    const classes = `icon ${this.props.classes}`;

    return (
      <div className={classes} id={this.props.id}>
        <Image src={iconPath} alt={this.props.alt} />
      </div>
    );
  }
}

export default Icon;
