import styled from "styled-components";

export const FlexContainer = styled.div<any>`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 40px;

  @media only screen and (max-width: 830px) {
    flex-direction: column;
  }
`;
