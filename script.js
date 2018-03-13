var degrees = 0;
var position = 0;
var count = 0;
function rotateArrow() {
    degrees += 180;
    position += 30;
    var arrow = document.getElementById("arrow");
    var nav = document.getElementById("nav");
    var ref = nav.getAttribute("href").valueOf();

    arrow.style.transform = "rotate(" + degrees + "deg)";

    if (count == 0) {
        count++;
        return;
    }
    if (ref == "#bottom"){
        nav.removeAttribute("href");
        nav.setAttribute("href", "#top")
    }
    else {
        nav.removeAttribute("href");
        nav.setAttribute("href", "#bottom")
    }

}