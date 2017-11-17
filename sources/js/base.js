function languagebar() {
    var x = document.getElementById("languagebar-dd");
    var z = document.getElementById("languagebar-ddc")
    if (z.style.display == "block") {
        x.style.display = "inline-block"
        z.style.display = "none";
    } else {
        x.style.display = "block"
        z.style.display = "block";
    }
}

function topbar() {
    var x = document.getElementById("topbar-dd");
    var y = document.getElementById("topbar-dd-i");
    var z = document.getElementById("topbar-ddc")
    var sy;
    var dsy;
    var timer;
    if (x.style.display == "block") {
        x.style.display = "inline-block"
        sy = 1;
        z.style.transform = "scaleY(1)";
        dsy = 0.1;
        timer = setInterval(
            function() {
                sy = sy - dsy;
                console.log(sy);
                z.style.transform = "scaleY("+ sy + ")";
                // clear the timer at 400px to stop the animation
                if (sy < 0) {
                    clearInterval(timer);
                }
            }, 1000);
        y.style.transform = "rotate(0deg)"
    } else {
        x.style.display = "block"
        sy = 0;
        z.style.transform = "scaleY(0)";
        dsy = 0.1;
        timer = setInterval(
            function() {
                sy = sy + dsy;
                z.style.transform = "scaleY("+ sy + ")";
                // clear the timer at 400px to stop the animation
                if (sy > 1) {
                    clearInterval(timer);
                }
            }, 1000);
        y.style.transform = "rotate(180deg)"
    }
}
