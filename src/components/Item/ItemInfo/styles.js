import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Label = styled.span`
  color: ${colors.lightBlack};
  font-weight: 200;
  font-size: smaller;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  font-size: inherit;
  margin: 3px;
`;

export const Value = styled.span`
  color: ${colors.darkBlack};
  font-size: medium;
`;
