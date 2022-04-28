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

// Ahora necesitamos recoger los contactos que se guardan en LocalSotrage y mostrarlos en pantalla a medida que se agreguen. Crearemos para esto la función de "cargarContactos" esta función se ejecutará cada veaz que se refresque la página, es decir, cada vez que pulsemos el botón "Agregar contacto" se ejecutara

const cargarContacto = (local, parentNode) => {
  // Los contactos en la base de datos se guardan a través de id únicos, vistos en "LocalSotrage" como "Key", cada "Key" tiene un valor que es un objeto con propiedades y este objeto representa cada contacto de la lista. Para obtener esta "key" la mejor forma de obtenerla es usando el super objeto de javascript .
  let claves = Object.keys(local);
  // Esta función recibe un parámetro que se encuentra en el otro archivo js, la función recibe este parámetro del archivo anterior.
  // Dentro de la variable "claves" tenemos un array con todas las "key" que tenemos en el LocalStorage, para visualizarlo, ejecutamos:
  //console.log(claves);
  // Notemos en consola como se genera un Array donde sus elementos son los diferentes "key" (id) que se genera al agregar un contacto.
  //Necesitamos entonces tener cada una de las propiedades del objeto (información del contacto) para esto usaremos un ciclo for
  for (clave of claves) {
    //console.log(clave);
    // La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), TypedArray, Map, Set e iterables definidos por el usuario. Recorremos todo el local storage.
    // Notemos como se imprimen ahora no como arrays, sino cada elemento del array por separado, de esta manera podemos acceder a cada una de las "key" de los objetos que tenemos guardados en el "LocalStorage".

    // Ahora queremos recoger cada uno de estos "key" de cada objeto.
    //let contacto = local.getItem(clave);
    //console.log(contacto);
    // La variable es igual a el item de la base de datos, que cada item se identifica por la clave (id, key).
    // Notemos como al agregar contactos se van añadiendo cada uno de los contactos representados por objetos. Pero NOTEMOS QUE SON STRINGS, lo que no nos permite acceder a las propiedades de los objetos, así que de algún modo pasar estos strings a objetos para acceder a sus propiedades, para esto usamos "JSON.parse(local.getItem(clave))" con esto a través de la sintaxis de punto podemos acceder al objeto.
    let contacto = JSON.parse(local.getItem(clave));

    //Así tenemos una forma de acceder a los objetos que tenemos guardados a través de su id y luego acceder a cada una de sus propiedades para poderlas mostrar.
    //console.log(contacto.id);

    // Ahora necesitamos crear los elementos que tenemos en "class="contacto" en el html. Estos elementos hacen referencia a cada iteración, es decir, por cada una de las veces que recorremos todo localStorage y accedemos a cada uno de los datos para mostrarlos en pantalla.

    // Crearemos entonces una función que genere estos elementos una vez se agrega un contacto nuevo a la lista de contactos. Esta función rebirá varios parámetros

    crearContacto(parentNode, contacto, local);
  }
};

// CREAR ELEMENTOS HTML

const crearContacto = (parentNode, contacto, local) => {
  //AÑADIR ELEMENTO
  // Esta funcion básicamente se encargará de crear y eliminar los elementos que se muestran en pantalla a medida que se agrega un contacto y se guarda en localStorage
  let divContacto = document.createElement("div");
  // "divContacto" es el div que tenemos en el html como class="contacto"
  let nombreContacto = document.createElement("h3");
  // "nombreContacto" es el elemento h3 que muestra en pantalla el nombre del contacto.
  let numeroContacto = document.createElement("p");
  //"numeroContacto" es el elemento p que muestra en pantalla el número de contacto
  let direccionContacto = document.createElement("p");
  //"direccionContacto" es el elemento p que muestra en pantalla la dirección del contacto que estamos guardando
  let iconoBorrar = document.createElement("span");
  // Hemos creado los 4 elementos html que necesitamos para mostrar los contactos en pantalla a medida que se van agregando, el div, el h3, los elementos p y el elemento span.
  //Como esta función se manda a llamar en un ciclo for, si hay 5 elementos, se crearán 5 veces los elementos anteriores y así sucesivamente.

  //AÑADIR CONTENIDO
  // A continuación vamos a rellenar con los datos que necesitamos los elementos html que generan el contacto

  nombreContacto.innerHTML = contacto.nombre;
  numeroContacto.innerHTML = contacto.telefono;
  direccionContacto.innerHTML = contacto.direccion;
  iconoBorrar.innerHTML = "delete_forever";

  //AÑADIR CLASES
  // A partir de acá debemos añadirle las clases a cada uno de los elementos previamente creados.

  divContacto.classList.add("contacto");
  iconoBorrar.classList.add("material-icons", "icono");

  //AÑADIR AL HIJO
  // Ahora añadiremos tanto el nombre, el numero, la dirección y el ícono al divContacto y luego añadir este divContacto al listado de contactos

  divContacto.appendChild(nombreContacto);
  divContacto.appendChild(numeroContacto);
  divContacto.appendChild(direccionContacto);
  divContacto.appendChild(iconoBorrar);

  //AÑADIR FUNCIÓN AL ÍCONO DE BORRAR
  iconoBorrar.onclick = () => {
    local.removeItem(contacto.id);
    window.location.href = "/";
  };

  //AÑADIR AL NODO PADRE
  // Al parentNode, el listado de tareas agregamos todo el divContacto

  // AÑADIR FUNCIÓN AL ÍCONO DE BORRAR
  parentNode.appendChild(divContacto);
};
