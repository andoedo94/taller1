--Se crean el servico Estudiante para el Taller1

var primerNombre; //Primer Nombre
var segundoNombre; //Segundo Nombre
var primerApellido; //Primer Apellido
var segundoApellido; //Primer Corte
var tipoDocumento; //Seguro Corte
var numeroDocumento; //Tercer Corte
var telefono; //Primer Corte
var direccion; //Seguro Corte
var edad; //Tercer Corte

function Estudiante(primerNombre, segundoNombre, primerApellido, segundoApellido, tipoDocumento, numeroDocumento, telefono, direccion, edad){
  
  this.primerNombre = primerNombre;
  this.segundoNombre = segundoNombre;  
  this.primerApellido = primerApellido;
  this.segundoApellido = segundoApellido;
  this.tipoDocumento = tipoDocumento;
  this.numeroDocumento = numeroDocumento;
  this.telefono = telefono;
  this.direccion = direccion;
  this.edad = edad;
  
  console.log("Información Estudiante, Nombre Completo: "+ this.primerNombre +" " this.segundoNombre + " " this.primerApellido " " + this.segundoApellido " " + segundoApellido; " Tipo Documento: " + this.tipoDocumento + " Número Documento: "+ this.numeroDocumento + " Edad:" + this.edad = edad);
}