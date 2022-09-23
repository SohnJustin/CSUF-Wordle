import React from "react";
import { Background, Wrapper, Introduction } from "./RouteStyle/HomePage.style";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Background>
      <Wrapper>
        <Introduction>This is front page of our project </Introduction>
        <button>
          <Link to="/play"> Play </Link>
        </button>
      </Wrapper>
    </Background>
  );
}
export default Home;
