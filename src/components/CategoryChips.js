import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CategoryChips = (props) => {
  const strCategory = props.categoryName;
  const location = useLocation();
  const pathClass = location.pathname.split('/');

  function checkActiveclass() {
    if (pathClass.length > 2) {
      return pathClass[2].toLowerCase() === strCategory.toLowerCase()
        ? 'active'
        : '';
    }
  }

  return (
    <Link to={`/category/${strCategory}`}>
      <div
        className={`chips chips--category chips--category--${strCategory.toLowerCase()} ${checkActiveclass()}`}
      >
        <span>{strCategory}</span>
      </div>
    </Link>
  );
};

export default CategoryChips;
