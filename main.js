// Lo primero es apuntar a las clases y los elementos html para poder utilizarlos. Las clases: "nombre", "telefono", "direccion"

const nombre = document.querySelector(".nombre");
const telefono = document.querySelector(".telefono");
const direccion = document.querySelector(".direccion");
const btnAgregarContacto = document.querySelector(".btn-agregar");

// Ahora lo que harémos es darle la interactividad a nuestro botón al agregar un contacto. Entonces cada vez que el usuario complete la información de los formularios, esta información se guarde DENTRO DE UN OBJETO y posteriormente dentro del LocalStorage.

// Para acceder al LocalStorage dentro de JavaScript:

const listadoContactos = document.querySelector(".lista-contactos");

const local = window.localStorage; //LocalStorage se almacena dentro del objeto window. A partir de esto tenemos dentro de la constante "local" diferentes métodos.

// Hecho lo anterior debemos hacer un apuntador a la lista de contactos, hecho previamente arriba.

// Agregaremos un evento al botón para que cuando pulsemos se genere una función y se ejecute para guardar los datos.

btnAgregarContacto.onclick = () => {
  // El "contacto" será el objeto donde guardaremos la información
  let contacto = {
    // El valor de la propiedad nombre será el que introduce el usuario en el formulario (input). nombre.value hace referecnia a la variable global y no a la propiedad del objeto. Haremos lo mismo para las otras propiedades.
    // Debemos generar un id único por contacto para que cuando tengamos que eliminar un elemento de la lista lo haremos a traves del id, así que crearemos una propiedad dentro de nuestro objeto para esto con el nombre de id. En este caso usaremos la clase "Math" para que nos genere un número aleatorio entre 1 y 100
    id: Math.random(1, 100),
    nombre: nombre.value,
    telefono: telefono.value,
    direccion: direccion.value,
  };
  //COMPROBAR EN CONSOLA NUESTRO OBJETO (Descomentar el console.log)
  //console.log(contacto);
  // Para ensayar, vamos a devtools, completamos el formulario y apretamos el botón de agregar contacto. En consola veremos nuestro objeto creado con los datos ingresados en el formulario

  // Ahora para guardar cada contacto que se agrega al momento de presionar el botón, en el LocalStorage, crearemos una función en el archivo de funciones la cual guarda nuestro contacto directamente en el LocalStorage de nuestro navegador. Hecho esto finalmente mandamos a llamar la función.

  guardarContacto(local, contacto);

  // Esta función recibe dos parámetros, el primero es la base de datos donde se guardará la información, en este caso el LocalStorage y el segundo que es la información como tal que se guardara allí, el objeto "contacto".
};

// una vez presionado el botón para agregar contactos ejecutamos la función para que se carguen los contactos y se muestren en pantalla

cargarContacto(local, listadoContactos);
// El listado de contactos, nombrado en html como class="lista-contactos" tendrá los div que van a tnere todos los datos del objeto que recuperamos del localStorage.
