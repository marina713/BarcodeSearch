import React from "react";
import { Label, RowContainer, Value, FirstCol, SecondCol } from "./styles";

type Props = {
  label: string,
  value: string | undefined,
  small?: boolean,
};

const ItemInfo = React.memo(({ label, value, small }: Props) => {
  return value ? (
    <RowContainer>
      <FirstCol small={!!small}>
        <Label small={!!small}>{label}</Label>
      </FirstCol>
      <SecondCol>
        <Value small={!!small}>{value}</Value>
      </SecondCol>
    </RowContainer>
  ) : null;
});

export default ItemInfo;
