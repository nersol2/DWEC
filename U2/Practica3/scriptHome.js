var p = new Surtido(productos);

// // var micompra = [productos[0], productos[3]];
// s.dibujarSurtido(micompra);
p.dibujarSurtido();

function recarga(){
location.reload();
}
function verPorPrecioMas(p){
  p.ordenPorPrecioMas();
  p.dibujarSurtido();
}
function verPorPrecioMenos(p){
  p.ordenPorPrecioMenos();
  p.dibujarSurtido();
}
function verVegano(){
  p.dibujarSurtido(p.ordenVegano());
}

function navegarCarrito(){
  window.open("carrito.html");
}
function condCompraOnline(){
  //Mostrar en otra ventana emergente las condiciones de compra y un boton que permita cerrarlas.
  var a = window.open("", "_black","width=400, height=400");
  a.document.write("<h1>Condiciones de las compras</h1>");
  a.document.write("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>")
  a.document.write("<br><button onclick='window.close()'>Cerrar ventana ")
}
