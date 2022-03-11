import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

class CategoryCard extends React.Component {
  state = { categoryName: '' };

  render() {
    const { strCategory, strCategoryThumb } = this.props.category;
    return (
      <Link to={`/category/${strCategory}`}>
        <div
          className={`card card--category card--category--${strCategory.toLowerCase()} `}
        >
          <div className="card__content">
            <h5>{strCategory}</h5>
            <Image src={strCategoryThumb} alt={strCategory} />
          </div>
        </div>
      </Link>
    );
  }
}

export default CategoryCard;
