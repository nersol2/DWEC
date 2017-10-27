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
