import React from "react";
import Ingredient from "../Ingredient";
import { Container } from "./styles";

type Props = {
  ingredientsList: string[],
};

const IngredientsList = React.memo(({ ingredientsList }: Props) => {
  const ingredients = ingredientsList.map((ingredient, index) =>
    ingredient !== "" ? (
      <Ingredient key={`${ingredient}-${index}`} ingredient={ingredient} />
    ) : null
  )


  return <Container>{ingredients}</Container>;
});

export default IngredientsList;
