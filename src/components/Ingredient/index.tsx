import React from "react";
import { ListItem } from "./styles";

export type Props = {
  ingredient: string,
};

const Ingredient = React.memo(({ ingredient }: Props) => ingredient ? <ListItem> {ingredient} </ListItem> : null);

export default Ingredient;
