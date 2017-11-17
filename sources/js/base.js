function topbar() {
    var x = document.getElementById("topbar-dd");
    var y = document.getElementById("topbar-dd-i");
    var z = document.getElementById("topbar-ddc")
    if (z.style.display == "none") {
        x.style.display = "block"
        z.style.display = "block";
        y.style.transform = "rotate(90)"
    } else {
        x.style.display = "inline-block"
        z.style.display = "none";
    }

}
