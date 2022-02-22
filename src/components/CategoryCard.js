import React from 'react';

class CategoryCard extends React.Component {
  render() {
    const { strCategory, strCategoryThumb } = this.props.category;
    return (
      <div
        className={`card card--category card--category--${strCategory.toLowerCase()}`}
      >
        <div className="card__content">
          <h5>{strCategory}</h5>
          <img src={strCategoryThumb} alt={strCategory} />
        </div>
      </div>
    );
  }
}

export default CategoryCard;
