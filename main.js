const nombre = document.querySelector(".nombre");
const telefono = document.querySelector(".telefono");
const direccion = document.querySelector(".direccion");
const btnAgregarContacto = document.querySelector(".btn-agregar");

const listadoContactos = document.querySelector(".lista-contactos");

const local = window.localStorage;

btnAgregarContacto.onclick = () => {
  let contacto = {
    id: Math.random(1, 100),
    nombre: nombre.value,
    telefono: telefono.value,
    direccion: direccion.value,
  };
  guardarContacto(local, contacto);
};

cargarContacto(local, listadoContactos);
