function languagebar() {
    var x = document.getElementById("languagebar-dd");
    var z = document.getElementById("languagebar-ddc")
    if (z.style.display == "none") {
        x.style.display = "block"
        z.style.display = "block";
    } else {
        x.style.display = "inline-block"
        z.style.display = "none";
    }
}

function topbar() {
    var x = document.getElementById("topbar-dd");
    var y = document.getElementById("topbar-dd-i");
    var z = document.getElementById("topbar-ddc")
    if (z.style.display == "none") {
        x.style.display = "block"
        z.style.display = "block";
        y.style.transform = "rotate(180deg)"
    } else {
        x.style.display = "inline-block"
        z.style.display = "none";
        y.style.transform = "rotate(0deg)"
    }
}
