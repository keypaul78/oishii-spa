import React from 'react';
import CategoryCard from './CategoryCard';
import CategoryChips from './CategoryChips';

const CategoriesList = (props) => {
  const categories = props.categories.map((category) => {
    let catCompo = (
      <CategoryCard
        key={category.idCategory}
        category={category}
        displayAs={props.displayMode}
        onClick={() => this.onClickCategory(category.strCategory)}
      />
    );
    if (props.displayMode === 'chips') {
      catCompo = (
        <CategoryChips
          key={category.idCategory}
          categoryName={category.strCategory}
          onClick={() => this.onClickCategory(category.strCategory)}
        />
      );
    }
    return catCompo;
    //console.log(category.idCategory + ' -- ' + category);
  });
  return (
    <div
      className={`list list--categories list--categories-${props.displayMode}`}
    >
      {categories}
    </div>
  );
};

export default CategoriesList;
