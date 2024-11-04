import { React, useEffect, useState } from "react";

function Myrecipe() {
  const [recipe, setRecipe] = useState({
    name: null,
    image: null,
    instructions: null,
  });

  function getRecipe() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        // accès aux données du tableau meals
        const meal = data.meals[0];
        setRecipe({
          name: meal.strMeal,
          image: meal.strMealThumb,
          instructions: meal.strInstructions,
        });
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <li className="cards__item">
      <div className="card">
        <img src={recipe.image} alt={recipe.meal} />

        <div className="card__content">
          <div className="card__title">{recipe.name}</div>
          <p className="card__text">{recipe.instructions}</p>
          <button onClick={getRecipe}>Another recipe</button>
        </div>
      </div>
    </li>
  );
}

export default Myrecipe;
