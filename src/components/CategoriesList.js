import React from 'react';
import CategoryCard from './CategoryCard';

const CategoriesList = (props) => {
  const categories = props.categories.map((category) => {
    return <CategoryCard key={category.idCategory} category={category} />;
    //console.log(category.idCategory + ' -- ' + category);
  });
  return <div className="list list--categories">{categories}</div>;
};

export default CategoriesList;
