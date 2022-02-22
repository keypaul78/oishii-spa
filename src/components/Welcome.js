//libs
import React from 'react';
import parse from 'html-react-parser';
//comps
import Label from './Label';
import Input from './Input';
import Icon from './Icon';
import InputGroup from './InputGroup';
//styles
//data
import fields from '../data/content.json';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="welcome">
        <h2>{parse(fields.search.heading)}</h2>
        <div className="welcome__form">
          <Label
            for="search-by-ingredientes"
            classes="h4 fw-medium d-block"
            text={fields.search.inputLabel}
          />
          <InputGroup>
            <Input
              placeholder={fields.search.inputPlaceholder}
              classes="input input--search d-block w-100"
              id="search-by-ingredients"
              type="text"
              icon="icon--search"
              describedby="search-icon"
            />
            <Icon
              id="search-icon"
              classes="icon--24"
              iconName="icon-search"
              alt="Search by ingredient"
            />
          </InputGroup>
        </div>
      </div>
    );
  }
}

export default Welcome;
