import styled, { createGlobalStyle } from "styled-components";

const GlobalBackground = createGlobalStyle`
  body {
    background: #00274c;
  }
`;
const HomeContainer = styled.div`
  padding-top: 10%;
  width: 100%;
  height: 100%;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export { GlobalBackground, HomeContainer };
