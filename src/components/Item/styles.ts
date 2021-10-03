import styled from "styled-components";
import { colors } from "../../utils/colors";

export const RowContainer = styled.div<any>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  min-width: 300px;
  max-width: 500px;
  border: 1px solid ${colors.lightGray};
  border-radius: 15px;
  padding: 10px;
  margin: 3px;
  overflow-wrap: anywhere;
  line-height: 1.5;
  ${(props) =>
    props.isThumbnail
      ? "cursor: pointer;filter: grayscale(1); min-width: 180px; max-width: 220px; padding: 5px; height: 80px; overflow: hidden; line-height: 1;"
      : null}
  ${(props) =>
    props.isThumbnail && props.selected
      ? "filter: grayscale(0); border-color:#00bcd4;"
      : null}
  &&:hover {
    ${(props) => (props.isThumbnail ? "filter: grayscale(0.3);" : null)}
  }
`;

export const Value = styled.span`
  color: ${colors.darkBlack};
  font-size: medium;
`;

export const ImgContainer = styled.div<any>`
  align-self: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: flex-start;
  ${(props) =>
    props.isThumbnail
      ? "height: 70px; width: 70px;"
      : "  height: 150px; width: 150px;"}
`;

export const Img = styled.img<any>`
  border-radius: 5px;
  align-self: center;
  ${(props) =>
    props.isThumbnail
      ? "max-height: 70px; max-width: 70px;"
      : "  max-height: 150px; max-width: 150px;"}
`;
