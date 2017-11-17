function dropdown_menu() {
    var x = document.getElementById(arguments[0]);
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}
