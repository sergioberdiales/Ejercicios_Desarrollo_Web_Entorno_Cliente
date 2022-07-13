// Solicitamos al usuario que introduzca un número del 1 al 10
// y lo almacenamos en la variable num

var num = window.prompt("Introduzca un número del 1 al 10:");

while(num = null) do {
    alert("Número no válido.");
    var num = window.prompt("Introduzca un número del 1 al 10:");
}
// Convertimos a número la variable introducida
var num1 = Number(num);
// Mostramos el número introducido
alert("El número introducido es el " + num1);