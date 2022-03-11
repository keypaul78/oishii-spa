//libs
import React from 'react';
import parse from 'html-react-parser';
import api from '../api/themealdb';
//comps
import Label from './Label';
import InputSearch from './InputSearch';
import Icon from './Icon';
import InputGroup from './InputGroup';
import SearchHint from './SearchHint';
//styles
//data
import fields from '../data/content.json';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      filteredIngredients: [],
    };
  }

  filterIngredient = (term, ingredientsList) => {
    const ingredients = ingredientsList.filter((ingredient) => {
      return (
        ingredient.strIngredient.toLowerCase().indexOf(term.toLowerCase()) !==
        -1
      );
    });
    //this.setState({ filteredIngredients: ingredients });
    console.log(ingredients);
  };

  onChange = async (term) => {
    const response = await api.get('/list.php?i=list');
    this.filterIngredient(term, response.data.meals);
  };

  render() {
    return (
      <div className="welcome">
        {this.props.mode === 'simple' ? null : (
          <h2>{parse(fields.search.heading)}</h2>
        )}

        <div className="welcome__form">
          {this.props.mode === 'simple' ? null : (
            <Label
              for="search-by-ingredientes"
              classes="h4 fw-medium d-block"
              text={fields.search.inputLabel}
            />
          )}

          <InputGroup>
            <InputSearch
              placeholder={fields.search.inputPlaceholder}
              classes="input input--search d-block w-100"
              id={`search-by-ingredients__${this.props.mode}`}
              type="text"
              icon="icon--search"
              describedby="search-icon"
              onChangeSubmit={this.onChange}
            />
            <Icon
              id="search-icon"
              classes="icon--24"
              iconName="icon-search"
              alt="Search by ingredient"
            />
          </InputGroup>
          <SearchHint ingredientsHint={this.state.filteredIngredients} />
        </div>
      </div>
    );
  }
}

export default Welcome;
