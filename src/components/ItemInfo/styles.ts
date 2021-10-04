import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Label = styled.span<any>`
  color: ${colors.lightBlack};
  font-weight: 200;
  font-size: ${(props) => (props.small ? "x-small" : "medium")};
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-size: inherit;
  margin: 3px;
  flex-direction: row;
`;

export const Value = styled.span<any>`
  color: ${colors.darkBlack};
  font-size: ${(props) => (props.small ? "x-small" : "medium")};
`;

export const FirstCol = styled.div<any>`
  width: ${(props) => (props.small ? "30px" : "80px")};
  text-align: start;
  overflow-wrap: normal;
`;

export const SecondCol = styled.div<any>`
  margin-left: ${(props) => (props.small ? "1px" : "10px")};
  width: 100%;
  text-align: start;
  font-weight: 600;
`;
