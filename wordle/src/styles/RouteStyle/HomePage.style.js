import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const Introduction = styled.div`
  font-size: 30px;
  color: #ff7900;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Prompt = styled.div`
  font-size: 20px;
  color: #ff7900;
  display: flex;
  align-items: center;
`;

const NamingList = styled.ul`
  color: white;
  display: flex;
  font-size: 20px;
`;

export { Introduction, Wrapper, NamingList, Prompt };
