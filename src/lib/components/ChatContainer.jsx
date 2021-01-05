import styled from "styled-components";
import defaultTheme from "../theme";

const ChatContainer = styled.div`
  /* appearance */
  background: ${({ theme }) => theme.background};
  border-radius: 10px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);
  /* size */
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  /* position */
  position: ${({ floating }) => (floating ? "fixed" : "relative")};
  bottom: ${({ floating, floatingStyle }) =>
    floating ? floatingStyle.bottom || "32px" : "initial"};
  top: ${({ floating, floatingStyle }) =>
    floating ? floatingStyle.top || "initial" : "initial"};
  right: ${({ floating, floatingStyle }) =>
    floating ? floatingStyle.right || "32px" : "initial"};
  left: ${({ floating, floatingStyle }) =>
    floating ? floatingStyle.left || "initial" : "initial"};
  z-index: 999; // stay at the top layer
  /* content */
  font-family: ${({ theme }) => theme.fontFamily};
  overflow: hidden;
  /* animation */
  transform: ${({ opened }) => (opened ? "scale(1)" : "scale(0)")};
  transform-origin: ${({ floatingStyle }) =>
    floatingStyle.transformOrigin || "bottom right"};
  transition: transform 0.1s ease;

  /* small screen position */
  @media screen and (max-width: 568px) {
    border-radius: ${({ floating }) => (floating ? "0" : "")};
    bottom: 0 !important;
    left: initial !important;
    height: 100%;
    right: 0 !important;
    top: initial !important;
    width: 100%;
  }
`;

ChatContainer.defaultProps = {
  theme: defaultTheme,
};

export default ChatContainer;
