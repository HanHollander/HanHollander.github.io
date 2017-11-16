function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("page").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("page").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}
