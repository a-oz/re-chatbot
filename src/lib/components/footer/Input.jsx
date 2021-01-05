import styled, { css } from "styled-components";
import defaultTheme from "../../theme";

const Input = styled.input`
  /* appearance */
  border: 0;
  border-radius: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: ${({ hasButton }) =>
    hasButton ? "16px 52px 16px 10px" : "16px 10px"};

  opacity: ${({ disabled, invalid }) => (disabled && !invalid ? ".5" : "1")};
  outline: none;
  border-top: ${({ invalid }) => (invalid ? "0" : "1px solid #eee")};
  box-shadow: ${({ invalid }) => (invalid ? "inset 0 0 2px #E53935" : "none")};

  /* size */
  width: 100%;

  /* content */
  color: ${({ invalid }) => (invalid ? "#E53935" : "")};
  font-size: 16px;

  box-sizing: border-box;
  -webkit-appearance: none;

  /* animation */

  &:disabled {
    background: #fff;
  }

  @media screen and (max-width: 568px) {
    border-bottom-left-radius: ${(props) => (props.floating ? "0" : "10px")};
    border-bottom-right-radius: ${(props) => (props.floating ? "0" : "10px")};
  }
`;

Input.defaultProps = {
  theme: defaultTheme,
};

export default Input;
