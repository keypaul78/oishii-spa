//libs
import React, { useState } from 'react';

//styles
//data
import fields from '../data/content.json';

const IngredientsList = () => {
  const [ingredientsList, setIngredients] = useState([
    fields.search.mostSearched,
  ]);

  return (
    <div className="list -list-ingrediens">
      {ingredientsList.map((ingredient) => ingredient)}
    </div>
  );
};

export default IngredientsList;
