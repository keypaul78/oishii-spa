import React from 'react';

class CategoryCard extends React.Component {
  state = { categoryName: '' };

  onClickCategory = (catName) => {
    console.log(catName);
  };

  render() {
    const { strCategory, strCategoryThumb } = this.props.category;
    return (
      <div
        onClick={() => this.onClickCategory(strCategory)}
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
