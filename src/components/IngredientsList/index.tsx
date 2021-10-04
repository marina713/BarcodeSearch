import React from "react";
import Ingredient from "../Ingredient";
import { Container, Label } from "./styles";

type Props = {
  ingredientsList: string[],
};

const IngredientsList = React.memo(({ ingredientsList }: Props) => {
  return ingredientsList.length > 0 ? (
    <Container>
      <Label>Ingredients</Label>
      {ingredientsList.map((ingredient, index) => (
        <Ingredient key={`${ingredient}-${index}`} ingredient={ingredient.trim()} />
      ))}
    </Container>)
    : null;
});

export default IngredientsList;
