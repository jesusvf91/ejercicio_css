alert("El sitio ha sido completamente cargado y analizado");

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