/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
    var valor1;
    var valor2;
    var resultado;
    
    valor1=document.getElementById("numeroUno").value;
    valor2=document.getElementById("numeroDos").value;
    
    valor1=parseInt(valor1);
    valor2=parseInt(valor2);
    
    
    resultado= valor1 - valor2;
    
    alert("El resultado de la resta es " + resultado);
}

function multiplicar()
{ 
	var valor1;
    var valor2;
    var resultado;
    
    valor1=document.getElementById("numeroUno").value;
    valor2=document.getElementById("numeroDos").value;
    
    valor1=parseInt(valor1);
    valor2=parseInt(valor2);
    
    
    resultado= valor1 * valor2;
    
    alert("El resultado de la multiplicación es " + resultado);
}

function dividir()
{
	var valor1;
    var valor2;
    var resultado;
    
    valor1=document.getElementById("numeroUno").value;
    valor2=document.getElementById("numeroDos").value;
    
    valor1=parseInt(valor1);
    valor2=parseInt(valor2);
    
    
    resultado= valor1 / valor2;
    
    alert("La diferecia es " + resultado);
}

