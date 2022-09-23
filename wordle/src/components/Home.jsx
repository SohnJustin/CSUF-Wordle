//file written by carla jacobsen feel free to rearrange the code as needed

//the class for a wordle by Carla
//source: since javascript isnt my native language
// https://www.w3schools.com/js/js_classes.asp
import buildPuzzleInterface from "./functions/WordleInterface";
import buildWordle from "./functions/BuildWordle";
import fetchWord from "./functions/FetchWord";
import checkUserGuess from "./functions/CheckUserGuess";

class wordle {
  //wordle class ================================================================
  constructor(currentWordleObject) {
    //variables added:
    //solution
    //variables to be added in the future:
    //difficulty      calculated via the length, can be easy, medium, or hard
    //solLen          length of the solution for indexing
    //randNum         random number generator helps us pick a word from the wordlist
    //next

    //constructor----------------------------------------------------------------
    this.solution = "tuffy"; //will be removed when the random number is implemented

    //future variables initialization
    //this.solution = "null";
    //this.randNum = 0;
    //this.difficulty = "null";
    //this.solLen = 0;
  } //constructor----------------------------------------------------------------
} //============================================================================

export default Home;
