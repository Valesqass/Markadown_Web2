import { React, useEffect, useState } from "react";

function Mocktail() {
  // état pour le tableau contenant les mocktails
  // `setMocktail` est la fonction qui permettra de mettre à jour cet état
  const [mocktail, setMocktail] = useState({
    name: null,
    image: null,
  });

  function getMocktail() {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    )
      // Reponse transformées en dossier JSON
      .then((res) => res.json())
      .then((data) => {
        //Index aléatoire du tableau Mocktail
        const randomIndex = Math.floor(Math.random() * data.drinks.length);
        // sélecton aléatoire d'un mocktail
        const myrandomMocktail = data.drinks[randomIndex];
        // màj de l'état avec le nom et l'image
        setMocktail({
          name: myrandomMocktail.strDrink,
          image: myrandomMocktail.strDrinkThumb,
        });
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    // Début de l'effet secondaire qui sera exécuté lors du montage du composant
    getMocktail(); // Appelle la fonction `getMocktail` pour récupérer un mocktail depuis l'API
  }, []); // L'action s'execute qu'une seule fois

  return (
    <li className="cards__item">
      <div className="card">
        <img src={mocktail.image} alt={mocktail.name} />

        <div className="card__content">
          <div className="card__title">{mocktail.name}</div>
          <p className="card__text"></p>
          <button onClick={getMocktail}>Another Mocktail</button>
        </div>
      </div>
    </li>
  );
}

export default Mocktail;
