//check the uer input
function checkUserGuess(userGuess) {
  const baseList = ["zero" ,"zero", "three", "three", "five", "five", "seven", "seven", "nine", "nine"];

  //compare the user's guess to the actual answer string
  //we can actually check the whole string at once!
  //sources https://www.w3schools.com/js/js_string_methods.asp
  // https://www.w3schools.com/js/js_arrays.asp
  if(userGuess == correctAnswer)
    {//guessed correctly!
    //fill an array with the color green
    const colorList = ["green"];
    //start with 1 because already have the value of [0]
    for(i = 1; i < correctAnswer.length; ++i)
      {//fill it with green
      colorList.push("green");
      }//fill it with green
    //return true;
    //finished filling with green, now return it
    return colorList;
    }//guessed correctly!
  }
export default checkUserGuess;
