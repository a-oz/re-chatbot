import styled from "styled-components";

const Content = styled.div`
  height: calc(
    ${({ height }) => height} -
      ${({ hideInput }) => (hideInput ? "56px" : "112px")}
  );
  overflow-y: auto;
  margin-top: 2px;
  padding-top: 6px;

  @media screen and (max-width: 568px) {
    height: ${({ floating }) => (floating ? "calc(100% - 112px)" : "")};
  }
`;

export default Content;
