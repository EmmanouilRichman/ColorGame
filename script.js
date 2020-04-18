var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var spanForColor = document.querySelector("#color-to-guess")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");



easybtn.addEventListener("click", function(){
    h1.style.backgroundColor = "steelblue";
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    messageDisplay.textContent = "";
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    spanForColor.textContent = pickedColor;
    for(var i = 0; i < 3; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    for(var i = 3; i < squares.length; i++){
        squares[i].style.display = "none";
    }
});

hardbtn.addEventListener("click", function(){
    h1.style.backgroundColor = "steelblue";
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    messageDisplay.textContent = "";
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    spanForColor.textContent = pickedColor;
    for(var i = 0; i < squares.length ; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    for(var i = 3; i < squares.length; i++){
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    spanForColor.textContent = pickedColor;
    //change colors of squres
    for(var i = 0; i < squares.length; i++){
        //change colors
        squares[i].style.backgroundColor = colors[i];
    }
});

spanForColor.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
    //adding colors to squares
    squares[i].style.backgroundColor = colors[i];

    //adding event listener
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to desired color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
        }
        else{
           this.style.backgroundColor = "#23232323";
           messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    //loop through squares
    for(var i = 0; i < squares.length; i++){
        //change colors
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor(){
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
     // pick a red from 0-255
     var red = Math.floor(Math.random() * 256);
     //pick green from 0-255
     var green = Math.floor(Math.random() * 256);
     //pick blue from 0-255
     var blue = Math.floor(Math.random() * 256);

     return ("rgb(" + red + ", " + green + ", " + blue + ")");
}
