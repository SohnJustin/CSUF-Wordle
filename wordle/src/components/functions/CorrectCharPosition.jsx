isCorrectCharPosition(inputChar, correctChar)//recieves the two letters as arguments and not the strings or arrays themselves
{//isCorrectCharPosition==========================================================
    if(inputChar == correctChar){//correct
      print("debug: character ", inputChar, "is correct \n");
      return true;
      }//correct
    else{
        //wrong character
      print("debug: character ", inputChar, "is incorrect, the correct letter is ", correctChar ,"\n");
      }//wrong character
}//isCorrectCharPosition==========================================================

//check all the letters in the
export default isCorrectCharPosition;