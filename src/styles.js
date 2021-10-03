import styled from "styled-components";
import { colors } from "./utils/colors";

export const AppContainer = styled.div`
  text-align: center;
  min-width: 60%;
  color: ${colors.black};

  @media only screen and (min-width: 730px) {
    .search {
      width: max-content;
    }
  }
`;

export const Heading = styled.h1`
  color: ${colors.darkBlack};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;
