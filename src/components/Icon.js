//libs
import React from 'react';
import Image from './Image';
//comps
//styles
//data
import fields from '../data/content.json';

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const iconPath = `${fields.basePath}/assets/images/icons/${this.props.iconName}.svg`;
    const classes = `icon ${this.props.classes}`;

    return (
      <div className={classes} id={this.props.id}>
        <Image src={iconPath} alt={this.props.alt} />
      </div>
    );
  }
}

export default Icon;
