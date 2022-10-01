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
      <Introduction>This is front page of our project </Introduction>
      <Link to="/play">
        Play:
        <PlayArrowIcon />
      </Link>
    </Wrapper>
  );
}
export default Home;
