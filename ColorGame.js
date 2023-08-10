var colors = generateRandomColor(6);
var square = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var pickedColor = pickColor();
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors = generateRandomColor(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i< square.length;i++){
        if(colors[i]){
            square[i].style.background = colors[i];
        }
        else square[i].style.display = "none";
    }
    h1.style.background = "steelblue";
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColor(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i< square.length;i++){
        square[i].style.background = colors[i];
        square[i].style.display = "block";
    }
    h1.style.background = "steelblue";
});

resetButton.addEventListener("click",function(){
    colors = generateRandomColor(6); 
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < square.length;i++){
        square[i].style.background = colors[i];
    }
    message.textContent = "";
    this.textContent ="NEW COLORS";
    h1.style.background = "steelblue";
});

//Pick Square Color 
colorDisplay.textContent = pickedColor;
for(var i = 0; i < square.length; i++){
    //Gán màu trong colors vào các square
    square[i].style.background = colors[i];

    //Event Click
    square[i].addEventListener("click",function(){
        var clickColor = this.style.background;
        if(clickColor === pickedColor){
            message.textContent = "Correct!!";
            h1.style.background = clickColor;
            resetButton.textContent = "Play Again?"; 
            changeColor(clickColor);
        }
        else {
            this.style.background = "#232323";
            message.textContent = "Try Again!!";
        }
    });

}

function changeColor(colors){ 
    //Đổi màu tất cả thành màu đúng
    for(var i=0; i<square.length; i++){
        square[i].style.background = colors;
    }
}

function pickColor(){
    //Random màu đề bài
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    //Random màu đề bài
    var a = [];
    for(var i=0; i< num; i++){
        a.push(randomColor());
    }
    return a;
}
function randomColor(){
    //Tạo random 3 màu
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " +b + ")" ;
}

