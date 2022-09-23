import styled from "styled-components";

const Background = styled.div`
  background-color: #00274c;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const Introduction = styled.h1`
  width: 60%;
  font-size: 65px;
  color: #ff7900;
  text-align: center;
  justify-content: center;
`;
export { Background, Wrapper, Introduction };
