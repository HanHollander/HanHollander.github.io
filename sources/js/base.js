function topbar() {
    var x = document.getElementById("topbar")
    var y = document.getElementById("topbar-dd");
    var z = document.getElementById("topbar-dd-i");
    if (y.style.display == "none") {
        x.style.display = "block"
        y.style.display = "block";
        // z.style.transform = "rotate(90)"
    } else {
        x.style.display = "inline-block"
        y.style.display = "none";
    }

}
