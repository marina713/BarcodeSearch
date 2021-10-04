import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Label = styled.span<any>`
  color: ${colors.lightBlack};
  font-weight: 200;
  margin-bottom: 3px;
  text-align: left;
  font-size: ${(props) => (props.small ? "small" : "medium")};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 3px;
  padding-right: 30px;
  flex-direction: column;
  margin-top: 13px;
`;

export const NutrimentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: smaller;
  width: 100%;
  padding-right: 20px;
  padding-left: 5px;
`;
