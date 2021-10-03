import styled from "styled-components";
import { colors } from "../../utils/colors";

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  min-width: 300px;
  max-width: 350px;
  border: 1px solid ${colors.lightGray};
  border-radius: 15px;
  padding: 10px;
  margin: 3px;
  overflow-wrap: anywhere;
  ${(props) =>
    props.isThumbnail
      ? "transform: scale(0.5); filter: grayscale(1); cursor: pointer; width: 60px;"
      : null}

  &&:hover {
    ${(props) => (props.isThumbnail ? "filter: grayscale(0.3);" : null)}
  }
`;

export const Value = styled.span`
  color: ${colors.darkBlack};
  font-size: medium;
`;
