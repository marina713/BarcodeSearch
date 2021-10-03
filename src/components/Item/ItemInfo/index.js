import React from "react";
import { Label, RowContainer, Value, FirstCol, SecondCol } from "./styles";

const ItemInfo = ({ label, value, small, column }) => {
  return value ? (
    <RowContainer column={column}>
      <FirstCol small={small}>
        <Label small={small}>{label}</Label>
      </FirstCol>
      <SecondCol>
        <Value small={small}>{value}</Value>
      </SecondCol>
    </RowContainer>
  ) : null;
};

export default ItemInfo;
