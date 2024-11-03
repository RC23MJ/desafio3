// Variable global para almacenar el color seleccionado
let colorActual = "white";

// Escuchar las teclas presionadas
document.addEventListener("keydown", function(event) {
    // Verificar la tecla presionada y asignar el color correspondiente
    if (event.key === "a" || event.key === "A") {
        colorActual = "pink";  // Color rosado para "a"
    } else if (event.key === "s" || event.key === "S") {
        colorActual = "orange";  // Color naranjo para "s"
    } else if (event.key === "d" || event.key === "D") {
        colorActual = "lightblue";  // Color celeste para "d"
    }

    // Llamar a la función para cambiar el color del div
    cambiarColorDiv();
});

// Función para cambiar el color del div con id "key"
function cambiarColorDiv() {
    // Seleccionar el div con el id "key"
    const divKey = document.getElementById("key");
    
    // Cambiar el color de fondo del div al colorActual
    divKey.style.backgroundColor = colorActual;
}
