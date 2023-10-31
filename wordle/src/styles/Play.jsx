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
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Play() {
  return (
    <Wrapper>
      <GlobalBackground>
        <Introduction>CSUF Themed Wordle Play Page </Introduction>
        <CssBaseline />
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
          <Box>
            <TextField />
          </Box>
        </GameBoard>
        Home:
        <Link to="/">
          <ReplayIcon style={{ color: "orange" }} fontSize="large" />
        </Link>
      </GlobalBackground>
    </Wrapper>
  );
}

export default Play;
