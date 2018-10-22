function changeToRed() {
    //single border: document.getElementById("boundary1").style.borderColor = "red";
    var boundaries = maze.querySelectorAll("div.boundary");

    boundaries.forEach(function(item) {
        item.style.borderColor= "red";
    });
}

function changeToNormal() {
    //single border: document.getElementById("boundary1").style.borderColor = "red";
    var boundaries = maze.querySelectorAll("div.boundary");

    boundaries.forEach(function(item) {
        item.style.borderColor= "black";
    });
}

function win(){
    var popup = document.getElementById('#end'); 
    e.onmouseover = function() {
        alert('YOU WIN!');
     }
   
}

