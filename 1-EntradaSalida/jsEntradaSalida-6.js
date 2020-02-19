/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var valor1;
var valor2;
var resultado;

valor1=document.getElementById("numeroUno").value;
valor2=document.getElementById("numeroDos").value;

valor1=parseInt(valor1);
valor2=parseInt(valor2);


resultado= valor1 + valor2;

alert("El valor de la suma es " + resultado);
}

