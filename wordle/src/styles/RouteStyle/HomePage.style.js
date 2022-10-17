import styled from "styled-components";

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

const ButtonStyle = styled.button``;
export { Wrapper, Introduction };
