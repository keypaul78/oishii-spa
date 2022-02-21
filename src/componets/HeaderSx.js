//libs
import React from 'react';
//comps
import Logo from '../componets/Logo';
//styles
//data
import fields from '../data/content.json';

class HeaderSx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header__sx">
        <Logo />
        <h3>
          {fields.welcome.Messagge} <span>{fields.welcome.table}</span>
        </h3>
      </div>
    );
  }
}

export default HeaderSx;
