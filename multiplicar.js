let contenedor = document.getElementById("contenedor");

function generarTablas() {
    let input = document.getElementById("numeroInput");
    let numero = parseInt(input.value);
    if (isNaN(numero) || numero < 1) {
        contenedor.innerHTML = "<div class='fila error'>⚠️ Por favor ingresa un número válido mayor a 0</div>";
        return;
    }
    if (numero > 100) {
        contenedor.innerHTML = "<div class='fila error'>⚠️ Ingresa un número entre 1 y 100</div>";
        return;
    }

    let contenido = "";
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        // Concatenamos cada item (fila) al contenido
        contenido += "<div class='fila'>" + numero + " × " + i + " = " + resultado + "</div>";
    }
    contenedor.innerHTML = contenido;
}


document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("numeroInput");
    if (input) {
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                generarTablas();
            }
        });
    }
});
