function changeToRed() {
    //single border: document.getElementById("boundary1").style.borderColor = "red";
    var boundaries = maze.querySelectorAll("div.boundary");

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

function win(){
    var popup =maze.etElementById('#end'); 
   popup.innerHTML = 'Fred Flinstone';
    // e.onmouseover = function() {
    //     console.log(alert('YOU WIN!'));
    //  }
   
}

