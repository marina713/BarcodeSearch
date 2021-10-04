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

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  min-width: 300px;
  max-width: 500px;
  border: 1px solid #00bcd4;
  border-radius: 15px;
  padding: 10px;
  margin: 3px;
  margin-right: 40px;
  overflow-wrap: anywhere;
  line-height: 1.5;

  @media only screen and (max-width: 830px) {
    margin: 5px 20px;
    flex-direction: column;
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
  max-height: 150px;
  max-width: 150px;

  @media only screen and (max-width: 830px) {
    align-self: center;
  }
`;

export const Img = styled.img`
  border-radius: 15px;
  margin-right: 5px;
  align-self: center;
  max-height: 150px;
  max-width: 150px;
`;
