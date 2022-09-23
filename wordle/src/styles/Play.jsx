import React from "react";
import { Background, Introduction } from "./RouteStyle/HomePage.style";
import { Link } from "react-router-dom";

function Play() {
  return (
    <Background>
      <Introduction>
        {" "}
        This is where the Game is going to be played{" "}
      </Introduction>
      <button>
        <Link to="/"> Back to Home Screen </Link>
      </button>
    </Background>
  );
}

export default Play;
