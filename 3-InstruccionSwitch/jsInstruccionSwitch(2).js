function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch(mes){
    case"Enero":
    case"Febrero":
    case"Marzo":
    case"Abril":
    case"Mayo":
    case"Junio":
         
    alert("Falta para el invierno");
    break;
    
    case"Julio":
    case"Agosto":

    alert("Abrigate que hace frio");
break;
      
default:
    alert("Ya pasó el invierno. Ahora calor");

}

}//FIN DE LA FUNCIÓN