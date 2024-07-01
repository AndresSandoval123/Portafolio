document.addEventListener("DOMContentLoaded", function () {
  const slaider = document.getElementById("slaider"),
    itemSlaider = document.querySelectorAll(".itemSlaider"),
    izquierda = document.getElementById("izquierda"),
    derecha = document.getElementById("derecha");


  let inicio = 0;
  const itemSlaiderAncho = itemSlaider[0].offsetWidth;
  const intervalo = 2000;


  function siguienteSlide() {
    inicio++;
    if (inicio >= itemSlaider.length) {
      inicio = 0;
    }
    moverCarrusel();
  }

  function anteriorSlide() {
    inicio--;
    if (inicio < 0) {
      inicio = itemSlaider.length - 1;
    }
    moverCarrusel();
  }

  function moverCarrusel() {
    const posicion = -inicio * itemSlaiderAncho;
    slaider.style.transition = 'transform 0.8s ease';
    slaider.style.transform = `translateX(${posicion}px)`;
  }

  setInterval(siguienteSlide, intervalo); 
  moverCarrusel();
  
  derecha.addEventListener('click', siguienteSlide);
  izquierda.addEventListener('click', anteriorSlide);

});