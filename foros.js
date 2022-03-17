--Se crea el servico Foros para el Taller1

var titulo; //Titulo Foro
var comentario; //Comentario Actividad
var tituloRespuesta; //Titulo Respuesta Foro
var comentarioRespuesta; //Comentario Respuesta Foro

function crearForo(titulo, comentario){
  
  this.titulo = titulo;
  this.comentario = comentario;  

  console.log("Se crear foro: "+ this.titulo + " Actividades: " + this.comentario);
}

/////////////////////////////////////////////////////////

function responderForo(tituloRespuesta, comentarioRespuesta){
  
  this.tituloRespuesta = tituloRespuesta;
  this.comentarioRespuesta = comentarioRespuesta;  

  console.log("Titulo respuesta foro: "+ this.tituloRespuesta + " Se registra respuesta Foro: " + this.comentarioRespuesta);
}

////////////////////////////////////////////////////////