import React from 'react';

class CategoryCard extends React.Component {
  render() {
    const { strCategory, strCategoryThumb } = this.props.category;
    return (
      <div className="card card--category">
        <h5>{strCategory}</h5>
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
    );
  }
}

export default CategoryCard;
