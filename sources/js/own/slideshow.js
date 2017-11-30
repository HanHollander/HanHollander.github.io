var cs = 0;
var slides = 3;
slideshowauto();
var sf = document.getElementById("slider-figure");

function slideshowauto() {
    slideshowbutton(cs);
    cs = (cs) % slides;
    setTimeout(slideshowauto(cs), 2000);
}

sf.style.left="0%";
function slideshowbutton(curID) {
    var bs = document.getElementsByClassName("my-slider-button");
    var i;
    for (i = 0; i < bs.length; i++) {
        bs[i].style.backgroundColor = "#e0e0e0";
    }
    bs[curID].style.backgroundColor = "#d0d0d0";
    slideshowpicture(curID);
    cs = curID
}

function slideshowpicture(curID) {
    var fig = document.getElementById("slider-figure");
    fig.style.left = (-100 * curID) + "%";
}
