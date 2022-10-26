import React from "react";
import {
  Wrapper,
  Introduction,
  NamingList,
  Prompt,
} from "./RouteStyle/HomePage.style";
import { Link } from "react-router-dom";
import { GlobalBackground } from "./RouteStyle/GlobalBackground.style";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Home() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <Wrapper>
      <GlobalBackground />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Introduction>CPSC 362 Home Page </Introduction>
        <Prompt>
          Created by Scrum Group 1:
          <NamingList>Nhan Mac</NamingList>
          <NamingList> Justin Sohn</NamingList>
          <NamingList> Carka Jacobsen</NamingList>
          <NamingList> Hamza Aziz</NamingList>
          <NamingList> Nelly Young</NamingList>
        </Prompt>
        Play:
        <Link to="/play">
          <PlayArrowIcon style={{ color: "orange" }} fontSize="large" />
        </Link>
      </ThemeProvider>
    </Wrapper>
  );
}
export default Home;
