import React from 'react';

const MealCard = (props) => {
  const { strMeal, strMealThumb } = props.meal;
  const meatCategory = props.mealCat;

  return (
    <div className="card card-dish">
      <div className="card__thumb">
        <img
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          data-src={strMealThumb}
          alt={strMeal}
          className="lazy"
        />
      </div>
      <div className="card__content">
        <span className="overline">{meatCategory}</span>
        <h4>{strMeal}</h4>
      </div>
    </div>
  );
};

export default MealCard;
