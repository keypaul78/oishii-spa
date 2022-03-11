import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MealCard from './MealCard';
import api from '../api/themealdb';

const MealsList = () => {
  let params = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const response = await api.get('/filter.php?c=' + params.categoryName);
      //console.log(response.data.meals);
      setMeals(response.data.meals);
    })();
  }, [params.categoryName]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>
            <span>{params.categoryName}</span>
          </h2>
          <div className="list list--meals">
            {meals.map((meal) => (
              <MealCard
                key={meal.idMeal}
                meal={meal}
                mealCat={params.categoryName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealsList;
