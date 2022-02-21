//libs
import React from 'react';
//comps
import HeaderSx from '../componets/HeaderSx';
import HeaderDx from '../componets/HeaderDx';
import HeaderCx from '../componets/HeaderCx';
//styles
//data

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header d-flex">
        <HeaderSx />
        <HeaderCx />
        <HeaderDx />
      </div>
    );
  }
}

export default Header;
