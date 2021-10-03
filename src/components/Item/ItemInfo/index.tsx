import React from "react";
import { Label, RowContainer, Value, FirstCol, SecondCol } from "./styles";

type Props = {
  label: string,
  value: string,
  small?: boolean,
  column?: boolean,
};

const ItemInfo = ({ label, value, small, column }: Props) => {
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
