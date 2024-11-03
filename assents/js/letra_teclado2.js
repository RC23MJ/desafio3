
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
    } else if (event.key === "q" || event.key === "Q") {
        // Si es "q" o "Q", llamamos a la función agregarElemento con color púrpura
        agregarElemento("purple");
    } else if (event.key === "w" || event.key === "W") {
        // Si es "w" o "W", llamamos a la función agregarElemento con color gris
        agregarElemento("gray");
    } else if (event.key === "e" || event.key === "E") {
        // Si es "e" o "E", llamamos a la función agregarElemento con color cafe
        agregarElemento("brown");
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

// Función para agregar un nuevo elemento
function agregarElemento(color) {
    // Obtener el elemento contenedor por su ID
    const contenedor = document.getElementById("contenedor");
    
    // Crear un nuevo elemento <div>
    const nuevoElemento = document.createElement("div");
    nuevoElemento.style.width = "200px";
    nuevoElemento.style.height = "200px";
    nuevoElemento.style.backgroundColor = color;
    nuevoElemento.style.border = "2px solid black";
    nuevoElemento.style.marginTop = "10px";
    
    // Agregar el nuevo elemento al contenedor
    contenedor.appendChild(nuevoElemento);
}


