import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ItemBox = styled.div`
  display: flex;
  width: 50%;
  align-self: flex-start;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 830px) {
    width: 100%;
  }
`;

export const RowContainer = styled.div<any>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid ${colors.lightGray};
  border-radius: 15px;
  overflow-wrap: anywhere;
  cursor: pointer;
  filter: grayscale(1);
  min-width: 180px;
  max-width: 220px;
  padding: 5px;
  margin: 3px;
  height: 80px;
  overflow: hidden;
  line-height: 1;
  ${(props) =>
    props.selected ? "filter: grayscale(0); border-color:#00bcd4;" : null}
  &&:hover {
    filter: grayscale(0.3);
  }

  @media only screen and (max-width: 830px) {
    margin: 5px 20px;
  }
`;

export const Value = styled.span`
  color: ${colors.darkBlack};
  font-size: medium;
`;

export const ImgContainer = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: flex-start;
  height: 70px;
  width: 70px;
`;

export const Img = styled.img`
  border-radius: 5px;
  align-self: center;
  max-height: 70px;
  max-width: 70px;
`;
