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
    if (z.style.transform == scaleY(1)) {
        x.style.display = "inline-block"
        var sy = 1;
        var dsy = 0.01;
        var timer;
        timer = setInterval(
            function() {
                sy = sy - dsy;
                z.style.transform = scaleY(sy);
                // clear the timer at 400px to stop the animation
                if (sy == 0) {
                    clearInterval(timer);
                }
            }, 10);
        y.style.transform = "rotate(0deg)"
    } else {
        x.style.display = "block"
        var sy = 0;
        var dsy = 0.01;
        var timer;
        timer = setInterval(
            function() {
                sy = sy + dsy;
                z.style.transform = scaleY(sy);
                // clear the timer at 400px to stop the animation
                if (sy == 1) {
                    clearInterval(timer);
                }
            }, 10);
        y.style.transform = "rotate(180deg)"
    }
}
