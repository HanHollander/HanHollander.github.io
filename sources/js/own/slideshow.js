var cs = 0;
var slides = 3;
var sf = document.getElementById("slider-figure");
sf.style.left="0%";
slideshowauto();

function slideshowauto() {
    slideshowbutton(cs);
    console.log(cs);
    cs = (cs + 1) % slides;
    setTimeout(slideshowauto, 7500);
}

function slideshowbutton(curID) {
    var bs = document.getElementsByClassName("my-slider-button");
    var i;
    for (i = 0; i < bs.length; i++) {
        bs[i].style.backgroundColor = "#d7d7d7";
    }
    bs[curID].style.backgroundColor = "#c6c6c6";
    slideshowpicture(curID);
    cs = curID
}

function slideshowpicture(curID) {
    var fig = document.getElementById("slider-figure");
    fig.style.left = (-100 * curID) + "%";
}
