const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const carrousel = document.querySelector("#carrousel");

abrir.addEventListener("click", () => {
nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
nav.classList.remove("visible");
})
var x = document.getElementById("login");
var y = document.getElementById("registrar");
var z = document.getElementById("elegir");

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}
function registrar(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "170px";
}
