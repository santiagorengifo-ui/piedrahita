/* =========================================================
   VISOR DE IMÁGENES DE LA GALERÍA
========================================================= */


/* Seleccionamos todas las imágenes de la galería */
const imagenes = document.querySelectorAll(".galeria img");


/* Seleccionamos el visor */
const visor = document.getElementById("visor");


/* Seleccionamos la imagen que aparecerá ampliada */
const imagenAmpliada = document.getElementById("imagen-ampliada");


/* Seleccionamos el botón de cerrar */
const cerrar = document.querySelector(".cerrar");



/* =========================================================
   ABRIR IMAGEN
========================================================= */

/* Recorremos todas las imágenes de la galería */
imagenes.forEach(function(imagen) {

    /* Detectamos cuando el usuario hace clic */
    imagen.addEventListener("click", function() {

        /* Mostramos el visor */
        visor.style.display = "flex";

        /* Mostramos en grande la imagen seleccionada */
        imagenAmpliada.src = imagen.src;

        /* Copiamos también su descripción */
        imagenAmpliada.alt = imagen.alt;

    });

});



/* =========================================================
   CERRAR CON LA X
========================================================= */

cerrar.addEventListener("click", function() {

    visor.style.display = "none";

});



/* =========================================================
   CERRAR HACIENDO CLIC EN EL FONDO
========================================================= */

visor.addEventListener("click", function(evento) {

    if (evento.target === visor) {

        visor.style.display = "none";

    }

});