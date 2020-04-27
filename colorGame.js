var numSquares = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var hardBtn = document.querySelector("#hardBtn");
var easyBtn = document.querySelector("#easyBtn");
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");

//initializes everything
init();

//reset Button
resetButton.addEventListener("click", function(){
    reset();
});


//initializes mode buttons and squares
function init(){
    //Mode Buttons
    setupModeButtons();
    //Squares Colors and Listeners
    setupSquares();
    reset();
}

//Mode Buttons + event Listners + selected class
function setupModeButtons(){
    for (var x = 0; x<modeButtons.length;x++){
        modeButtons[x].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}


//Setup Squares  
function setupSquares(){
    for (var x = 0; x<squares.length; x++){
        //adds event Listners
        squares[x].addEventListener("click", function(){

            //determines if square is correct
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor){
                messageDisplay.style.color = "rgb(66, 217, 124)";
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


//resets colors
function reset(){
    //chooses new colors
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#232323";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    messageDisplay.style.color = "black";

    //displays new colors
    for (var x = 0; x<squares.length; x++){

        if(colors[x]){
            squares[x].style.display = "block";
            squares[x].style.backgroundColor = colors[x];
        }else{
            squares[x].style.display = "none";
        }
        
    }
}

//updates color of squares to the same on win
function changeColors(color){
    for (var x = 0; x < squares.length; x++){
        squares[x].style.backgroundColor = color;
    }
}

//Chooses random color from list of colors
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//generates array of num # of colors
function generateRandomColors(num){
    var arr = []

    //adds a random color to array
    for (var i = 0; i<num; i++){
        arr.push(randomColors());
    }

    return arr
}


//generates a random rgb color
function randomColors(){
    //red is 0-255
    var red = Math.floor(Math.random()*256);
    //green is 0-255
    var green = Math.floor(Math.random()*256);
    //blue is 0-255
    var blue = Math.floor(Math.random()*256);

    return "rgb("+red+", "+green+", "+blue+")";
}