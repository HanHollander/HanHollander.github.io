function open_menu() {
    var x = document.getElementById("menu");
    x.style.width = "12%";
    x.style.fontSize = "16px";
    // x.style.paddingTop = "10%";
    x.style.display = "block";
}
function close_menu() {
    document.getElementById("menu").style.display = "none";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}
