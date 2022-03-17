--Se crea el servico Calendario para el Taller1

var dia; //Selección Día
var nombreEvento; //Nombre Evento

function fechaCalendario(dia, nombreEvento){
  
  this.dia = dia;
  this.nombreEvento = nombreEvento;  

  console.log("Se programa evento para el día: "+ this.dia + " Nombre del Evento: " + this.nombreEvento);
}

/////////////////////////////////////////////////////////