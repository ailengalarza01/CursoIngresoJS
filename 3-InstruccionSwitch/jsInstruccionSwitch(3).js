function mostrar()
{

var mes = document.getElementById('mes').value;

	
	switch(mes){
        case"Febrero":
        alert("Este mes no tiene mas de 29 días");
        break;

        default:
            alert("Este mes tiene 30 o mas días");

        }
}
//FIN DE LA FUNCIÓN