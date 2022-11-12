let menuHbg = document.querySelector(".menu-hamburguer");
let menuOpn = document.querySelector("#menu-oculto");

function menuOp () {

    if (menuOpn.style.display === "block") {
        menuOpn.style.display = "none";
    } else {
        menuOpn.style.display = "block"
    }
}

menuHbg.addEventListener("click", menuOp);