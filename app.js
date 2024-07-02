let currentIndex = 0; /* se define un indice de inicio */
function navegar(direccion){
    const slaider = document.getElementById("slaider");
    const itemSlaider = document.querySelectorAll(".itemSlaider");
    
    currentIndex = (currentIndex + direccion + itemSlaider.length) % itemSlaider.length;
    const offset = currentIndex * -8;
    
    slaider.style.transform = `translateX(${offset}%)`;
    
    console.log(offset);
}

/* Se realiza eventos a los botones y se le da la funcion navegar */
document.getElementById("izquierda").addEventListener("click", ()=> {
    navegar(-1);
});

document.getElementById("derecha").addEventListener("click", ()=> {
    navegar(1);
});
/* Se incia en 0 para generar el desplazamiento automatico */
let automatico = 0;

/* Funcion para hacer el recorrido automatico */
function inicio(interval) {
   stop(); // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    navegacion = setInterval(() => {
    navegar(1); // Navega al siguiente item cada intervalo de tiempo.
    }, interval);
}
function stop() {
   clearInterval(automatico);
}
// Iniciar autoplay con un intervalo de 3 segundos.
inicio(3000);
