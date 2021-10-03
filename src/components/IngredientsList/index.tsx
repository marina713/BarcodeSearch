import React from "react";
import Ingredient from "../Ingredient";
import { Container } from "./styles";

type Props = {
  ingredientsList: string[],
};

const IngredientsList = ({ ingredientsList }: Props) => {
  const numIngredients = ingredientsList.length;

  const ingredients =
    numIngredients > 0
      ? ingredientsList.map((ingredient, index) =>
        ingredient !== "" ? (
          <Ingredient key={`${ingredient}-${index}`} ingredient={ingredient} />
        ) : null
      )
      : null;

  return <Container>{ingredients}</Container>;
};

export default IngredientsList;
