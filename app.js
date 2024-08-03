/* Seccion sobre mi / Frases */
document.addEventListener('DOMContentLoaded', function() {
  const frase = document.querySelectorAll('.frase');
  let i = 0;

  function mostrarSiguiente() {
    frase[i].classList.remove('active'); // elimina la clase y oculta la frase
    i = (i + 1) % frase.length; // Avanza a la siguiente frase
    frase[i].classList.add('active'); // Muestra la siguiente frase
  }

  // Inicializa la primera frase como visible
  frase[i].classList.add('active');

  // Cambia la frase cada 2 segundos
  setInterval(mostrarSiguiente, 2000);
}); 

/* Seccion tecnologias */
const root = document.documentElement;
const slaiderElementoDisplayed = getComputedStyle(root).getPropertyValue("--slaider-elemento-displayed");
const slaider = document.querySelector("ul.slaider");

root.style.setProperty("--slaider-elemento", slaider.children.length);

for (let i = 0; i < slaiderElementoDisplayed; i++) {
  slaider.appendChild(slaider.children[i].cloneNode(true));
}

/* Seccion proyectos */

let imagenes = [
  {
    url: './img/proyectos/jampa1.webp',
    nombre: 'E-commerce',
    descripcion: 'Plataforma de comercio electrónico llamada "JAMPA shop".'
  },
  {
    url: './img/proyectos/Wireframes1.webp',
    nombre: 'Wireframes',
    descripcion: 'Creados en Figma para diseñar interfaces y prototipos.'
  },
  {
    url: './img/proyectos/publicidad1.webp',
    nombre: 'Diseños de publicidad',
    descripcion: 'Creo diseños que capturan la atención y comunican mensajes efectivos.'
  },
  {
    url: './img/proyectos/video.webp',
    nombre: 'Creación de video',
    descripcion: 'Desde la planificación hasta la producción y edición.'
  },
  {
    url: './img/proyectos/app1.webp',
    nombre: 'App de asistencia',
    descripcion: 'Desarrolle una app de asistencia para agilizar dicho proceso.'
  },
  {
    url: './img/proyectos/logica1.webp',
    nombre: 'Ejercicios de logica',
    descripcion: 'Desarrollo ejercicios para mejorar  mis habilidades analíticas y de resolución de problemas.'
  }
];

let atras = document.getElementById("atras");
let adelante = document.getElementById("adelante");
let imagen = document.getElementById("img");
let puntos = document.getElementById("puntos");
let texto = document.getElementById("texto");
let actual = 0;

atras.addEventListener("click", function () {
  actual -= 1
  if (actual == -1) {
    actual = imagenes.length - 1
  }
  imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="">`
  texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
  posicionCarrucel()
})
adelante.addEventListener("click", function () {
  actual += 1
  if (actual == imagenes.length) {
    actual = 0
  }
  imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="">`
  texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
  posicionCarrucel()
})

function posicionCarrucel() {
  puntos.innerHTML = "";
  for (let i = 0; i < imagenes.length; i++) {
    if (i == actual) {
      puntos.innerHTML += '<p class="bold">.</p>'
    } else {
      puntos.innerHTML += '<p>.</p>'
    }
  }
}