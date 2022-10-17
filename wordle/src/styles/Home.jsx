import React from "react";
import { Wrapper, Introduction } from "./RouteStyle/HomePage.style";
import { Link } from "react-router-dom";
import {
  GlobalBackground,
  HomeContainer,
} from "./RouteStyle/GlobalBackground.style";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
function Home() {
  return (
    <Wrapper>
      <GlobalBackground />
      <Introduction>CPSC 362 Home Page </Introduction>
      Play:
      <Link to="/play">
        <PlayArrowIcon style={{ color: "orange" }} fontSize="large" />
      </Link>
    </Wrapper>
  );
}
export default Home;
