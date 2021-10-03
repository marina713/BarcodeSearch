import styled from "styled-components";
import { colors } from "../../utils/colors";
import { onHoverHighlight } from "../../utils/animations";

export const Form = styled.form`
  min-width: 40%;
`;

export const Container = styled.div`
  margin: 20px 0 30px;

  @media only screen and (min-width: 730px) {
    .search {
      width: max-content;
    }
  }
`;

export const SubTitle = styled.h4`
  color: ${colors.lightBlack};
  margin: 0 auto 15px;
  font-weight: 300;
`;

export const Input = styled.input`
  color: ${colors.black};
  font-size: 16px;
  background: transparent;
  width: 35px;
  height: 35px;
  padding: 10px;
  border: solid 3px ${colors.black};
  outline: none;
  border-radius: 35px;
  transition: width 0.5s;

  &::placeholder {
    color: ${colors.black};
    font-size: 12px;
    transition: 0.1 150ms ease-out;
  }

  &:focus::placeholder {
    opacity: 0.5;
  }

  &:not(:placeholder-shown) {
    width: 235px;
  }

  &:focus {
    width: 200px;
    border-color: inherit;
  }

  @media only screen and (min-width: 730px) {
    &:focus {
      width: 250px;
    }
  }
`;

export const InputContainer = styled.div`
  display: inline-block;
  position: relative;
  filter: drop-shadow(0 1px ${colors.lightGray});
  margin: 8px;
  ${(props) => (props.isLoading ? "opacity: 0.2" : null)}

  &:after {
    content: "";
    background: ${colors.black};
    width: 4px;
    height: 20px;
    position: absolute;
    top: 27px;
    transform: rotate(135deg);
  }

  &:hover {
    ${onHoverHighlight}
  }
  @media only screen and (min-width: 730px) {
    margin-left: 20px;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const Image = styled.img`
  height: 50px;
  align-self: center;
  margin: 0 10px;
  ${(props) => (props.isLoading ? "filter: invert(0.9);" : null)}
  ${(props) => (props.error ? "fill: orangered;" : null)}
`;
