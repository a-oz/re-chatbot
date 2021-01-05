import styled from "styled-components";
import defaultTheme from "../../theme";

const Header = styled.div`
  /* appearance */
  background: ${({ theme }) => theme.headerBgColor};
  color: ${({ theme }) => theme.headerFontColor};
  fill: ${({ theme }) => theme.headerFontColor};
  /* size */
  height: ${({ theme }) => theme.headerHeight};
  /* content */
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
`;

Header.defaultProps = {
  theme: defaultTheme,
};

export default Header;
