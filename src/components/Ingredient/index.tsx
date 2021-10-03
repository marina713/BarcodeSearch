import React from "react";
import { ListItem } from "./styles";

type Props = {
  ingredient: string,
};

const Ingredient = React.memo(({ ingredient }: Props) => {
  return <ListItem> {ingredient} </ListItem>;
});

export default Ingredient;
