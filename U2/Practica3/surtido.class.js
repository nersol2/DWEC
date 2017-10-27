function Mas(p1,p2){
  return p1.precio - p2.precio;
}
function Menos(p1,p2){
  return p2.precio - p1.precio;
}
function Surtido(productos){
  this.productos = productos;
  this.ordenPorPrecioMenos = function(){
    this.productos.sort(Menos);
  }
  this.ordenPorPrecioMas = function(){
    this.productos.sort(Mas);
  }
  this.dibujarSurtido = function(produ){
    cuerpo.innerHTML = "";
    var str = "";
    if(produ == undefined){
      for (var i = 0; i < this.productos.length; i++) {
        str += "<div>";
        str += "<img src='" + this.productos[i].foto + "' alt = '";
        str += this.productos[i].nombre + "'>";
        str += "<p> Producto: " + this.productos[i].nombre + "</p>";
        str += "<p> " + this.productos[i].descripcion + "</p>";
        str += "<p><b>" + this.productos[i].precio + "</b></p>";
        str += "</div>"
      }
    }else{
      for (var i = 0; i < produ.length; i++) {
        str += "<div>";
        str += "<img src='" + produ[i].foto + "' alt = '";
        str += produ[i].nombre + "'>";
        str += "<p> Producto: " + produ[i].nombre + "</p>";
        str += "<p> " + produ[i].descripcion + "</p>";
        str += "<p><b>" + produ[i].precio + "</b></p>";
        str += "</div>"
      }
    }
      cuerpo.innerHTML = str;

  }
}
