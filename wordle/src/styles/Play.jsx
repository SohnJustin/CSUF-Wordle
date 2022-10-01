import React from "react";
import { Wrapper, Introduction } from "./RouteStyle/HomePage.style";
import { Link } from "react-router-dom";
import { GlobalBackground } from "../styles/RouteStyle/GlobalBackground.style";
import ReplayIcon from "@mui/icons-material/Replay";

function Play() {
  return (
    <Wrapper>
      <GlobalBackground />
      <Introduction>
        {" "}
        This is where the Game is going to be played{" "}
      </Introduction>
      Play:
      <Link to="/">
        <ReplayIcon />
      </Link>
    </Wrapper>
  );
}

export default Play;
