import React from "react";
import Ingredient from "../Ingredient";
import { Container } from "./styles";

const IngredientsList = ({ ingredientsList }) => {
  const numIngredients = ingredientsList.length;

  const ingredients =
    numIngredients > 0
      ? ingredientsList.map((ingredient, index) =>
          ingredient !== "" ? (
            <Ingredient key={index} id={index} ingredient={ingredient} />
          ) : null
        )
      : null;

  return <Container>{ingredients}</Container>;
};

export default IngredientsList;
