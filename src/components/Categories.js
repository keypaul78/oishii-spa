import React from 'react';
import api from '../api/themealdb';
//compo
import CategoriesList from './CategoriesList';
//data
import fields from '../data/content.json';

class Categories extends React.Component {
  state = { categories: [] };

  async componentDidMount() {
    const response = await api.get('/categories.php');
    this.setState({ categories: response.data.categories });
    console.log(this.state.categories);
  }

  render() {
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h4>{fields.category.heading}</h4>
          </div>
        </div>

        <CategoriesList categories={this.state.categories} />
      </div>
    );
  }
}

export default Categories;
