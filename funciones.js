const guardarContacto = (local, contacto) => {
  // Esta función va a ir al local Storage
  local.setItem(contacto.id, JSON.stringify(contacto));
  // La función guarda elementos en localStorage, con el "JSON.stringgify" pasamos ese objeto que JavaScript no reconoce a una cadena de texto. Cada vez que pulsemos el botón agregar se guarda un objeto diferente con id único y datos diferentes. La función guarda el contacto con el id único que se genera al presionar el botón y ese objeto lo convierte en string y lo guarda en "LocalSotrage".
  //local.setItem(contacto.id, contacto);
  // "local" como lo nombramos previamente es el "localStorage". "setItem" es la función que hace referencia a que vamos a guardar algo dentro del localStorage. "JSON.stringify" lo que hace es coger un tipo de dato objeto y lo pasa a string. Si no hacemos esto se nos creará un "super objeto" en JS que no se podrá leer

  // Para refrescar los formularios una vez se ingresen los datos y presionar el botón, hacemos:

  window.location.href = "/";
  //Lo anterior indica una redirección forzada a que nos recargue la página y restablecer nuestro formulario para un nuevo ingreso de datos.
};
