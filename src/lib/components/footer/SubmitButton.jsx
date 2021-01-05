import styled from "styled-components";
import defaultTheme from "../../theme";

const getFill = ({ speaking, invalid, theme }) => {
  if (speaking) {
    return theme.headerBgColor;
  }
  return invalid ? "#E53935" : "#4a4a4a";
};

const SubmitButton = styled.button`
  /* appearance */
  background-color: transparent;
  fill: ${getFill};
  opacity: ${({ disabled, invalid }) => (disabled && !invalid ? ".5" : "1")};

  border-bottom-right-radius: 10px;
  box-shadow: none;
  outline: none;

  /* position */
  position: absolute;
  right: 0;
  top: 0;
  border: 0;
  padding: 14px 16px 12px 16px;

  /* action */
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:before {
    content: "";
    position: absolute;
    width: 23px;
    height: 23px;
    border-radius: 50%;
  }

  &:not(:disabled):hover {
    opacity: 0.7;
  }
`;

SubmitButton.defaultProps = {
  theme: defaultTheme,
};

export default SubmitButton;
