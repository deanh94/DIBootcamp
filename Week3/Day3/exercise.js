function myMove() {
    let elem = document.getElementById("animate");
    let left = 0;
    let id = setInterval(function() {
        if (left == 350) {
            clearInterval(id);
        }
        else {left = left + 5
        elem.style.left = left + "px"
        }
    }, 5);
}
