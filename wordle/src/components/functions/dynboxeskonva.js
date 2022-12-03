//source https://github.com/konvajs/react-konva
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
//This function will print the row for the guess
//konva requires to print through Component
class WordleRow extends React.Component
{//WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow

  function dynBoxes(currentGuessNum, userGuess, wordLen, colorsAry, colorsLen)
  {//dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes
    //base coordinates
    var base_X_Coord = 0;
    var base_Y_Coord  = 0;
    //length and height of box
    var boxWid = 50;
    var boxHeight = 50;
    //colors
    //source: https://htmlcolorcodes.com/
    let csuf_Orange  = "#FF791E";//also is RGB 255, 121, 30
    let csuf_White   = "#FFFFFF";//also is RGB 255, 255, 255
    let csuf_Blue    = "#2747EE";//also is RGB 39, 71, 238

    //the corners of the box
    //edit we can just do the top and bottom y and the left and right x
    var left_X = 0;
    var right_X = 0;
    var top_Y = 0;
    var bottom_Y = 0;

    //what will the coordinates be?
    //the y coordinate will be the same for each box
    //y coordinate is calculated from the currentGuessNum
    //how does this work?
    //for the first row the top of the box is y = 0 and the bottom of the box is y = 50
    // so top of box = (currentGuessNum - 1) * boxHeight
    // and then bottom of box = currentGuessNum * boxHeight
    //i think the y goes upside down in graphics so that is why the bottom has a higher value
    top_Y = (currentGuessNum - 1) * boxHeight;
    bottom_Y  = currentGuessNum * boxHeight;
    console.log("the top y coordinate is ", top_Y, "\n");
    console.log("the bottom y coordinate is ", bottom_Y, "\n");

    //now it is time to print the boxes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for (var i = 0; i < colorsAry.length; i++)
    {//now it is time to print the boxes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      //update the x coordinates
      //so in the first box the left is x = 0 and the right is x = 50
      //so then left of box = i * boxWid
      //and then right of box = (i + 1) * boxWid
      left_X = i * boxWid;
      right_X = (i + 1) * boxWid;
      console.log("for index i = ", i , "the left x coordinate is ", left_X, "\n");
      console.log("for index i = ", i , "the right x coordinate is ", right_X, "\n");

      //this is how we will iterate through the user guess
      //source https://www.w3schools.com/jsref/jsref_charat.asp
      let boxColor = "null";
      //determine what color it is
      if ((colorsAry[i] == "green") || (colorsAry[i] == "blue"))
        {//csuf_Blue BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
          boxColor = csuf_Blue;
          console.log("blue box! for letter ", userGuess.charAt(i), "\n");
        }//csuf_Blue BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
      else if ((colorsAry[i] == "orange") || (colorsAry[i] == "yellow"))
        {//csuf_Orange OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
          boxColor = csuf_Orange;
          console.log("Orange box! for letter ", userGuess.charAt(i), "\n");
        }//csuf_Orange OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
      else
        {//csuf_White WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
          boxColor = csuf_White;
          console.log("White box! for letter ", userGuess.charAt(i), "\n");
        }//csuf_White WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

      //this is how we will iterate through the user guess
      //source https://www.w3schools.com/jsref/jsref_charat.asp
      //the letter to print
      var printChar = userGuess.charAt(i);

      //print the box!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      console.log("calling the print_Single_Box function \n");
      console.log("parameter list: \n");
      console.log("left_X = ", left_X, "\n");
      console.log("right_X = ", right_X , "\n");
      console.log("top_Y = ", top_Y , "\n");
      console.log("bottom_Y = ", bottom_Y , "\n");
      console.log("printChar = ", printChar , "\n");
      console.log("boxColor = ", boxColor , "\n");
      console.log("end of parameter list \n");
      //print_Single_Box(left_X, right_X, top_Y, bottom_Y, printChar, boxColor);
      //create the square!!!!!
      //TIME TO DRAW THE BOX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      //check the color
      //source https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect
      //to print the letter:
      //source https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText
      if (boxColor == csuf_White)
        {//box is white WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
          //prepare the box for drawing

          //print the box using konva
          // source https://github.com/konvajs/react-konva
          // source https://konvajs.org/docs/shapes/Rect.html
          //render to prepare it
          render()
          {//render box render box render box render box render box render box render box render box render box render box render box render box
            //return prints the box through the DOM
            return(//return return return return return return return return return return return return return return return return return return
              <Rect
                x={left_X}
                y={top_Y}
                width={boxWid}
                height={boxHeight}
                fill={boxColor}
              />
            );//return return return return return return return return return return return return return return return return return return
          }//render box render box render box render box render box render box render box render box render box render box render box render box

          //now the box is printed!
          //print the letter next!
          //the box is 50x50 so make the letter 25x25
          //also should be maybe moved by like a few pixels

          //determine where the letter will be drawn!
          // 12 is around the middle of 25 so we can print it in the middle of the square here!
          letter_X = left_X + 12;
          letter_Y = top_Y + 12;
          //the size of the letter!
          letter_Wid = 25;

          //for a white box the text should be black
          // the text will be in arial and black and around 25x25 and printed at 12x12 coordinate in the box
          //print the letter using konva
          // source https://konvajs.org/docs/shapes/Text.html
          render()
          {//render letter render letter render letter render letter render letter render letter render letter render letter render letter
            return(//return return return return return return return return return return return return return return return return return return
              <Text
              x={letter_X}
              y={letter_Y}
              text={printChar}
              fontSize={25}
              fontFamily={"Arial"}
              fill={"black"}
              width={letter_Wid}
              align={"center"}
              />
            );//return return return return return return return return return return return return return return return return return return
          }//render letter render letter render letter render letter render letter render letter render letter render letter render letter

          //now the letter and the box are printed!
        }//box is white WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
      else if (boxColor == csuf_Orange)
        {// box is orange OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
          //prepare the box for drawing

          //print the box using konva
          // source https://github.com/konvajs/react-konva
          // source https://konvajs.org/docs/shapes/Rect.html
          //render to prepare it
          render()
          {//render box render box render box render box render box render box render box render box render box render box render box render box
            //return prints the box through the DOM
            return(//return return return return return return return return return return return return return return return return return return
              <Rect
                x={left_X}
                y={top_Y}
                width={boxWid}
                height={boxHeight}
                fill={boxColor}
              />
            );//return return return return return return return return return return return return return return return return return return
          }//render box render box render box render box render box render box render box render box render box render box render box render box

          //now the box is printed!
          //print the letter next!
          //the box is 50x50 so make the letter 25x25
          //also should be maybe moved by like a few pixels

          //determine where the letter will be drawn!
          // 12 is around the middle of 25 so we can print it in the middle of the square here!
          letter_X = left_X + 12;
          letter_Y = top_Y + 12;
          //the size of the letter!
          letter_Wid = 25;

          //for a orange box the text should be black
          // the text will be in arial and black and around 25x25 and printed at 12x12 coordinate in the box
          //print the letter using konva
          // source https://konvajs.org/docs/shapes/Text.html
          render()
          {//render letter render letter render letter render letter render letter render letter render letter render letter render letter
            return(//return return return return return return return return return return return return return return return return return return
              <Text
              x={letter_X}
              y={letter_Y}
              text={printChar}
              fontSize={25}
              fontFamily={"Arial"}
              fill={"black"}
              width={letter_Wid}
              align={"center"}
              />
            );//return return return return return return return return return return return return return return return return return return
          }//render letter render letter render letter render letter render letter render letter render letter render letter render letter

          //now the letter and the box are printed!
        }// box is orange OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
      else
        {// box is blue BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
          //prepare the box for drawing

          //print the box using konva
          // source https://github.com/konvajs/react-konva
          // source https://konvajs.org/docs/shapes/Rect.html
          //render to prepare it
          render()
          {//render box render box render box render box render box render box render box render box render box render box render box render box
            //return prints the box through the DOM
            return(//return return return return return return return return return return return return return return return return return return
              <Rect
                x={left_X}
                y={top_Y}
                width={boxWid}
                height={boxHeight}
                fill={boxColor}
              />
            );//return return return return return return return return return return return return return return return return return return
          }//render box render box render box render box render box render box render box render box render box render box render box render box

          //now the box is printed!
          //print the letter next!
          //the box is 50x50 so make the letter 25x25
          //also should be maybe moved by like a few pixels

          //determine where the letter will be drawn!
          // 12 is around the middle of 25 so we can print it in the middle of the square here!
          letter_X = left_X + 12;
          letter_Y = top_Y + 12;
          //the size of the letter!
          letter_Wid = 25;

          //for a blue box the text should be white
          // the text will be in arial and white and around 25x25 and printed at 12x12 coordinate in the box
          //print the letter using konva
          // source https://konvajs.org/docs/shapes/Text.html
          render()
          {//render letter render letter render letter render letter render letter render letter render letter render letter render letter
            return(//return return return return return return return return return return return return return return return return return return
              <Text
              x={letter_X}
              y={letter_Y}
              text={printChar}
              fontSize={25}
              fontFamily={"Arial"}
              fill={"white"}
              width={letter_Wid}
              align={"center"}
              />
            );//return return return return return return return return return return return return return return return return return return
          }//render letter render letter render letter render letter render letter render letter render letter render letter render letter

          //now the letter and the box are printed!
        }// box is blue BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
    }//now it is time to print the boxes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }//dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes dynBoxes
}//WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow WordleRow

//set up the drawing area for my boxes
//source https://github.com/konvajs/react-konva
class WordleStage extends Component
{//Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes
  render()//render render render render render render render render render render render render render render render render render render render
  {//render render render render render render render render render render render render render render render render render render render
    //stage is a div container
    // layer is actual canvas element
    // oooh so the layer is my current calling of the box?  I'm not sure but I still think should work
    // "and then we have canvas shapes inside the layer"
    // this is a rendering of the row then!!!!!!!!!!!!!!!!!!!!!!!
    //draw the layer!!!!!!!!!!!
    return(//return return return return return return return return return return return return return return return return return return return
      //setting the stage!!!!!!!!!!!!!
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="WORDLE ROW" />
          <WordleRow />
        </Layer>
      </Stage>
    );//return return return return return return return return return return return return return return return return return return return
  }//render render render render render render render render render render render render render render render render render render render render
}//Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes

//simulate a series of guesses
/*var guess_1 = "hello";
var guess_2 = "titan";
var guess_3 = "tufts";
var guess_4 = "tufty";
var guess_5 = "tuffy";
const guess_1_Ary = ["white", "white", "white", "white", "white"];
const guess_2_Ary = ["blue", "white", "orange", "white", "white"];
const guess_3_Ary = ["blue", "blue", "blue", "orange", "white"];
const guess_4_Ary = ["blue", "blue", "blue", "orange", "blue"];
const guess_5_Ary = ["blue", "blue", "blue", "blue", "blue"];
console.log("the correct answer is tuffy \n");
console.log("guess 1 = hello =/= tuffy should be white-white-white-white-white \n");
var indexOfGuess = 1;
//dynBoxes(currentGuessNum, userGuess, wordLen, colorsAry, colorsLen)
dynBoxes(indexOfGuess , guess_1 , 5, guess_1_Ary , 5);
++indexOfGuess;
console.log("guess 2 = titan =/= tuffy should be blue-white-orange-white-white \n");
dynBoxes(indexOfGuess , guess_2 , 5, guess_2_Ary , 5);
++indexOfGuess;
console.log("guess 3 = tufts =/= tuffy should be blue-blue-blue-orange-white \n");
dynBoxes(indexOfGuess , guess_3 , 5, guess_3_Ary , 5);
++indexOfGuess;
console.log("guess 4 = tufty =/= tuffy should be blue-blue-blue-orange-blue \n");
dynBoxes(indexOfGuess , guess_4 , 5, guess_4_Ary , 5);
++indexOfGuess;
console.log("guess 5 = tuffy == tuffy should be blue-blue-blue-blue-blue \n");
dynBoxes(indexOfGuess , guess_5 , 5, guess_5_Ary , 5);*/

render(<WordleStage />, document.getElementById('root'));
