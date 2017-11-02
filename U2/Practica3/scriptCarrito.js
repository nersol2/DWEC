if (navigator.cookieEnabled == "false") {
  alert("Error tienes que habilitar las cookies");
}

user = new Usuario(compras);
user.calcularImporte();
user.mostrarCompra();

function eliminar(){
  user.eliminarCompra();

  user.calcularImporte();
  user.mostrarCompra();

}

function hacerPedido(){
if (user.compra.indexOf(0) == -1) {
    var resp = confirm("Aceptas las condiciones?");
    if(resp) {
        window.open("pedidoOK.html")
    } else {
        alert("No has aceptado las condiciones.");
    }
}
}

function condCompraOnline(){
  var a = window.open("", "_black","width=400, height=400");
  a.document.write("<h1>Condiciones de las compras</h1>");
  a.document.write("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>")
  a.document.write("<br><button onclick='window.close()'>Cerrar ventana ")
}

function inicio(){
  window.open("home.html");
}
function imprimir(){
  window.print()
}
