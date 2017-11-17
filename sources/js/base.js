function topbar() {
    var y = document.getElementById("topbar-dd");
    var z = document.getElementById("topbar-dd-i");
    if (y.style.display == "none") {
        y.style.display = "block";
        z.style.transform = "rotate(90)"
    } else {
        y.style.display = "none";
    }

}
