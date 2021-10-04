import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
`;

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  @media only screen and (max-width: 830px) {
    width: 100%;
  }
`;
