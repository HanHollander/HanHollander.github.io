bs[0].style.backgroundColor = "#d0d0d0"
function slideshowbutton(curID) {
    var bs = document.getElementsByClassName("my-slider-button");
    var i;
    for (i = 0; i < length(bs); i++) {
        bs[i].style.backgroundColor = "#e0e0e0"
    }
    bs[curID].style.backgroundColor = "#d0d0d0"
}
