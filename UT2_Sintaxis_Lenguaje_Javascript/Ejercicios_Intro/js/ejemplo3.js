// Solicitamos los números al usuario, los almacenamos
//  y nos aseguramos de que su formato sea numérico
//  utilizando la función number()
var n1 =  window.prompt("Introduzca un número, por favor.");
var num1=Number(n1);
var n2 =  window.prompt("Introduzca otro número, por favor.");
var num2=Number(n2);

    // Si cumple las condiciones: 
    // Calculamos el producto de las dos variables (num1 * num2) 
    // mediante el método de sumas sucesivas
    // Antes inicializamos la variable "producto" a 0
    var producto = 0;

    // Construimos un bucle "for" que lo que hace es
    // es sumar el primer número tantas veces como 
    // el valor del segundo número nos diga
    for(i=1;i<=num2;i++) {
        producto += num1;
    }

    // Mostramos el resultado por pantalla al usuario
    document.write("Este es el resultado de aplicar a las variables introducidas \
    el método del producto mediante sumas sucesivas: " + producto);





