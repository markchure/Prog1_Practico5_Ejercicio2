//Ingresar 3 valores enteros y mostrar el menor de ellos. Ej. si se lee: 1, -3, 5, mostrar: -3
var num1 = parseInt(prompt("Ingrese el primer número"));
var num2 = parseInt(prompt("Ingrese el segundo número"));
var num3 = parseInt(prompt("Ingrese el tercer número"));

var menor;
menor = num1;

if(num2<menor){
  menor = num2;
}

if(num3<menor){
  menor = num3;
}

console.log("El menor es: " + menor);
