/*alert("El sitio ha sido completamente cargado y analizado");

let nombre = prompt("¿Cuál es tu nombre?");
alert("Hola " + nombre + ", bienvenido a mi sitio web");

let hora = new Date().getHours();

if (hora < 12) {
    alert("Buenos días, " + nombre + "!");
} else if (hora < 18) {
    alert("Buenas tardes, " + nombre + "!");
} else {
    alert("Buenas noches, " + nombre + "!");
}
*/

function cambiarTitulo() {
    let titulo = document.getElementById("titulo");

    if(titulo.classList.contains("rojo")) {
        titulo.classList.remove("rojo");
    } else {
        titulo.classList.add("rojo");
    }
}

function validarFormulario(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre");
    if (nombre.value.trim() == "" || nombre.value.lenght > 100) {
        document.getElementById("mensajeErrorNombre").style.display = 'block';
    } else {
        document.getElementById("mensajeErrorNombre").style.display = 'none';
        document.getElementById("formulario").style.display = 'none';
        document.getElementById("mensajeExito").style.display = 'flex';
    }
}