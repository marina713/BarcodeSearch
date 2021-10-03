import React from "react";
import { Label, RowContainer, Value } from "./styles";

const ItemInfo = ({ label, value }) => {
  return value ? (
    <RowContainer>
      <div style={{ width: 90, textAlign: "end" }}>
        <Label>{label}</Label>
      </div>
      <div style={{ width: "100%", marginLeft: 10, textAlign: "start" }}>
        <Value>{value}</Value>
      </div>
    </RowContainer>
  ) : null;
};

export default ItemInfo;
