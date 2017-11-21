var languagebartimer;
function languagebar() {
    clearInterval(languagebartimer);
    var x = document.getElementById("languagebar-dd");
    var z = document.getElementById("languagebar-ddc")
    var sy;
    var dsy;
    var hy=60;
    if (x.style.display == "block") {
        x.style.display = "inline-block";
        sy = 1;
        hy = 60;
        // z.style.transform = "scaleY(1)";
        dsy = 0.1;
        languagebartimer = setInterval(
            function() {
                sy = sy - dsy;
                console.log(sy);
                // z.style.transform = "scaleY("+ sy + ")";
                z.style.height = (sy*hy) + "px";
                // clear the timer at 400px to stop the animation
                if (sy < 0) {
                    clearInterval(languagebartimer);
                    // z.style.transform = "scaleY(0)";
                    z.style.display = "none";
                    z.style.height = "0px";
                }
            }, 25);
    } else {
        x.style.display = "block";
        z.style.display = "block";
        sy = 0;
        // z.style.transform = "scaleY(0)";
        dsy = 0.1;
        languagebartimer = setInterval(
            function() {
                sy = sy + dsy;
                // z.style.transform = "scaleY("+ sy + ")";
                z.style.height = (sy*hy) + "px";
                // clear the timer at 400px to stop the animation
                if (sy > 1) {
                    clearInterval(languagebartimer);
                    // z.style.transform = "scaleY(1)";
                    z.style.height = "60px";
                }
            }, 25);
    }
}

var topbartimer;
function topbar() {
    clearInterval(topbartimer);
    var x = document.getElementById("topbar-dd");
    var y = document.getElementById("topbar-dd-i");
    var z = document.getElementById("topbar-ddc");
    var sy;
    var hy= 216;
    var dsy;
    var h = document.getElementById("topbar-home");
    var hys = h.style.height;
    var pad = h.style.paddingTop;
    console.log("height " + hys + " padding " + pad)
    if (x.style.display == "block") {
        x.style.display = "inline-block";
        sy = 1;
        // z.style.transform = "scaleY(1)";
        dsy = 0.1;
        topbartimer = setInterval(
            function() {
                sy = sy - dsy;
                console.log(sy);
                // z.style.transform = "scaleY("+ sy + ")";
                z.style.height = (sy*hy) + "px";
                // clear the timer at 400px to stop the animation
                if (sy < 0) {
                    clearInterval(topbartimer);
                    // z.style.transform = "scaleY(0)";
                    z.style.height = "0px";
                }
            }, 25);
        y.style.transform = "rotate(0deg)";
    } else {
        x.style.display = "block"
        sy = 0;
        // z.style.transform = "scaleY(0)";
        dsy = 0.1;
        topbartimer = setInterval(
            function() {
                sy = sy + dsy;
                // z.style.transform = "scaleY("+ sy + ")";
                z.style.height = (sy*hy) + "px";
                // clear the timer at 400px to stop the animation
                if (sy > 1) {
                    clearInterval(topbartimer);
                    // z.style.transform = "scaleY(1)";
                    z.style.height = hys + "px";
                }
            }, 25);
        y.style.transform = "rotate(180deg)"
    }
}
