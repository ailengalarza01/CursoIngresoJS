/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var valor1;
    var valor2;
    var resultado;

    valor1=document.getElementById("numeroDividendo").value;
    valor2=document.getElementById("numeroDivisor").value;

    valor1=parseInt(valor1);
    valor2=parseInt(valor2);


    resultado= valor1 % valor2;

    alert("El  resto es " + resultado);
}
