function changeToRed() {
    //single border: document.getElementById("boundary1").style.borderColor = "red";
    var boundaries = document.querySelectorAll("div.boundary");

    boundaries.forEach(function(item) {
        item.style.borderColor = "red";
    });
}

function changeToNormal() {
    var boundaries = document.querySelectorAll("div.boundary");

    boundaries.forEach(function(item) {
        item.style.borderColor = "black";
    });
}

function win(){
    document.getElementById("status1").innerHTML = "You Win!";  
}

function lose(){
    document.getElementById("status1").innerHTML = "You Lose!";  
}

function undo(){
    document.getElementById("status1").innerHTML = ""; 
}

window.onload = changeToNormal, undo;
