import React from "react";
import { ListItem } from "./styles";

type Props = {
  ingredient: string,
};

const Ingredient = ({ ingredient }: Props) => {
  return <ListItem> {ingredient} </ListItem>;
};

export default Ingredient;
