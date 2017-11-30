var cs = 0;
var slides = 3;
var sf = document.getElementById("slider-figure");
sf.style.left="0%";
slideshowauto();

function slideshowauto() {
    slideshowbutton(cs);
    console.log(cs);
    cs = (cs + 1) % slides;
    setTimeout(slideshowauto, 5500);
}

function slideshowbutton(curID) {
    var bs = document.getElementsByClassName("my-slider-button");
    var i;
    for (i = 0; i < bs.length; i++) {
        bs[i].style.backgroundColor = "#e2e2e2";
    }
    bs[curID].style.backgroundColor = "#313131";
    slideshowpicture(curID);
    cs = curID
}

function slideshowpicture(curID) {
    var fig = document.getElementById("slider-figure");
    fig.style.left = (-100 * curID) + "%";
}
