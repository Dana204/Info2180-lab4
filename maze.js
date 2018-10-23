function changeToRed() {
    //single border: document.getElementById("boundary1").style.borderColor = "red";
    var boundaries = document.querySelectorAll("div.boundary");

    boundaries.forEach(function(item) {
        item.style.borderColor= "red";
    });
}

function changeToNormal() {
    var boundaries = maze.querySelectorAll("div.boundary");

    boundaries.forEach(function(item) {
        item.style.borderColor= "black";
    });
}

// function win(){
//     document.getElementById("#end").innerHTML = "You win!"; 
   
// }

