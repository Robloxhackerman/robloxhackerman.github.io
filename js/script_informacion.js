let video = document.getElementById("video")
let btn = document.getElementById("bt_play")
let img = document.getElementById("img_btn")
let cerrar = document.getElementById("popup")
let screen = document.getElementById("screen")
let PEPE1 = 0

window.addEventListener("load", function(){
  });
  

function Play() {

    if (video.paused) {
        video.play();
        img.src = "/recursos/imagenes/iconos/pausa.png"
        
    }
    else {
        video.pause();
        img.src = "/recursos/imagenes/iconos/tocar.png"
    }
}

function Replay() {
    video.pause();
    video.currentTime = 0;
    img.src = "/recursos/imagenes/iconos/pausa.png";
    video.play();
}
