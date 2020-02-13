function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

//alert (laHora);

switch(laHora){
    case"7":
    case"8":
    case"9":
    case"10":
    case"11":
    case"7:00":
    case"8:00":
    case"9:00":
    case"10:00":
    case"11:00":
    case"7am":
    case"8am":
    case"9am":
    case"10am":
    case"11am":
    case"7.am":
    case"8.am":
    case"9.am":
    case"10.am":
    case"11.am":
    case"7:00.am":
    case"8:00.am":
    case"9:00.am":
    case"10:00.am":
    case"11:00.am":
    
    alert("Es de mañana.");
    break;

    default:
alert("Para que este ejercicio otorgue informacion acerca del horario, usted debe ingresar una hora entre las 7:00 y las 11:00 en cualquiera de los siguientes formatos: 7-11, 7am-11am, 7.am-11.am,7:00-11:00, 7:00.am-11:00.am o 7:00am-11:00am ")   


	


}
}//FIN DE LA FUNCIÓN