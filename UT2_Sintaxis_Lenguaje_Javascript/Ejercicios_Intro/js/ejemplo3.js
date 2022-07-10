





var n1 =  window.prompt("Deme un número, por favor.");

var num1=Number(n1);

document.write("Este es el primer número: " + num1);  


var n2 =  window.prompt("Deme un número, por favor.");

var num2=Number(n2);

document.write("Este es el segundo número: " + num2);

var suma = 0;

for(i=1;i<=num2;i++) {
    suma = suma + num1;
}


document.write("Y esta es la multiplicación de ambos números mediantes sumas sucesivas: " + suma);
