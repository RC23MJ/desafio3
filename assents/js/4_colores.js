// Función para cambiar el color
function cambiarColorANegro(div) {
    div.style.backgroundColor = 'black';
}

// Seleccionamos los div
const azul = document.getElementById("Azul");
const rojo = document.getElementById("Rojo");
const verde = document.getElementById("Verde");
const amarillo = document.getElementById("Amarillo");

// Añadimos los eventos click
azul.addEventListener("click", function() {
    cambiarColorANegro(azul);
});
rojo.addEventListener("click", function() {
    cambiarColorANegro(rojo);
});
verde.addEventListener("click", function() {
    cambiarColorANegro(verde);
});
amarillo.addEventListener("click", function() {
    cambiarColorANegro(amarillo);
});

