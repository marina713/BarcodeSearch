import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Label = styled.span`
  color: ${colors.lightBlack};
  font-weight: 200;
  ${(props) => (props.small ? "font-size: x-small;" : "font-size: medium;")}
`;

export const RowContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: baseline;
  font-size: inherit;
  margin: 3px;
  ${(props) =>
    props.column ? "flex-direction: column;" : "flex-direction: row;"}
`;

export const Value = styled.span`
  color: ${colors.darkBlack};
  ${(props) => (props.small ? "font-size: x-small;" : "font-size: medium;")}
`;

export const FirstCol = styled.div`
  ${(props) => (props.small ? "width: 30px;" : "width: 80px;")}
  text-align: end;
  overflow-wrap: normal;
`;

export const SecondCol = styled.div`
  ${(props) => (props.small ? " margin-left: 1px;" : "margin-left: 10px;")}
  width: 100%;
  text-align: start;
`;
