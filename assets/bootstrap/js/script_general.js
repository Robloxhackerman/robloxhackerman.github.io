let loader = document.getElementById("preloader")

window.addEventListener("load", function(){
  loader.style.display ="none"
  clearInterval(coso);
});

let coso = setInterval(puntitos, 300)

/*Funciones */
function puntitos() {
  if (document.getElementById('dot').textContent.length < 3) {
    document.getElementById('dot').textContent += '.';
  } else {
    document.getElementById('dot').textContent = '';
  }
}