import React from "react";
import { Wrapper, Introduction } from "./RouteStyle/HomePage.style";
import { Link } from "react-router-dom";
import { GlobalBackground } from "../styles/RouteStyle/GlobalBackground.style";
import ReplayIcon from "@mui/icons-material/Replay";
import {
  GameBoard,
  FilledBox,
  LetterRow,
  LetterBox,
} from "../styles/RouteStyle/PlayPage.style";

function Play() {
  return (
    <Wrapper>
      <GlobalBackground />
      <Introduction>CSUF Themed Wordle Play Page</Introduction>
      <GameBoard>
        <FilledBox>
          <LetterRow>
            <LetterBox />
            <LetterBox />
            <LetterBox />
            <LetterBox />
            <LetterBox />
          </LetterRow>
          <LetterRow>
            <LetterBox />
            <LetterBox />
            <LetterBox />
            <LetterBox />
            <LetterBox />
          </LetterRow>
          <LetterRow>
            <LetterBox />
            <LetterBox />
            <LetterBox />
            <LetterBox />
            <LetterBox />
          </LetterRow>
          <LetterRow>
            <LetterBox />
            <LetterBox />
            <LetterBox />
            <LetterBox />
            <LetterBox />
          </LetterRow>
          <LetterRow>
            <LetterBox />
            <LetterBox />
            <LetterBox />
            <LetterBox />
            <LetterBox />
          </LetterRow>
          <LetterRow>
            <LetterBox />
            <LetterBox />
            <LetterBox />
            <LetterBox />
            <LetterBox />
          </LetterRow>
        </FilledBox>
      </GameBoard>
      Home:
      <Link to="/">
        <ReplayIcon style={{ color: "orange" }} fontSize="large" />
      </Link>
    </Wrapper>
  );
}

export default Play;
