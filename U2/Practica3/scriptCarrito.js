if (navigator.cookieEnabled == "false") {
  alert("Error tienes que habilitar las cookies");
}

user = new Usuario(productos);
user.calcularImporte();
user.mostrarCompra();
