//check the uer input
function checkUserGuess(userGuess) {
  //checkUserGuess===========================================================
  //compare the user's guess to the actual answer string
  if (userGuess == this.solution) {
    //guessed correctly!
    return true;
  } //guessed correctly!
  //we don't need an else because the if statement exits this function upon true
  //for now the alternative is that hte user's guess is incorrect
  return false;
  //later this statement will be replaced with code to check all the letters and their positions
} //checkUserGuess===========================================================
//============================================================================

//fetch a word from the wordlist
//for a future iteration
//using the results of the random number generator

export default checkUserGuess;
