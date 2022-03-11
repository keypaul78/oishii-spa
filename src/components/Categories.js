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
    //console.log(this.state.categories);
  }

  render() {
    return (
      <div className={`container pt-5 wrap-categories-${this.props.mode}`}>
        <div className="row">
          <div className="col-12">
            {!this.props.mode ? <h4>{fields.category.heading}</h4> : null}
            <CategoriesList
              categories={this.state.categories}
              displayMode={this.props.mode}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
