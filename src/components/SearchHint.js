import React from 'react';

const SearchHint = (props) => {
  const ingredients = props.ingredientsHint.map((ingredient) => {
    return (
      <span key={ingredient.idIngredient}>{ingredient.strIngredient}</span>
    );
  });

  return <div className="search--hint">{ingredients}</div>;
};

export default SearchHint;
