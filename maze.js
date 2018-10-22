function changeToRed() {
    document.getElementById("boundary1").style.borderColor = "red";


var boundaries = maze.querySelectorAll("div.boundary");

boundaries.forEach(function(item) {
    item.style.borderColor= "red";
});
}