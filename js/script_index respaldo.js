let titulo = 'Bienvenida, Avril.';
let PEPE1 = 0;

window.addEventListener("load", function () {
  document.getElementById('screen').innerHTML = '<div class="img"></div> <div class="boton borde">  <a href="pages/informacion.html"> <span></span><span></span><span></span><span></span> <p>/start</p><p id="barra">_</p> </a></div>';
  escribir();
  let coso2 = setInterval(escribir, 100)
});

/*Funciones */
function escribir() {
  if (PEPE1 < titulo.length) {
    document.getElementById('titulo').innerHTML += titulo.charAt(PEPE1);
    PEPE1++;
  }
}
