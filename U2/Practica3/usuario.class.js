function Usuario(productos){
  this.id = Math.floor(Math.random() * 1000)+1;
  this.idioma = navigator.language;
  this.navegador = navigator.userAgent;
  this.compra = productos;
  this.importe = 0;

  this.eliminarCompra = function(){
    if(this.compra.length > 0){
      delete this.compra[length];
    }else{
        alert("Error, no se puede eliminar porque no hay compra en el carrito.");
    }
  }
  this.calcularImporte = function(){
    if(this.compra.length > 0){
      var impor = this.compra.reduce(function(total, num) {
        return total + num.precio;
      },0);
  }this.importe = total;
  }else{
    alert("Error, no se puede calcular porque no hay productos en el carrito.");
}

this.mostrarCompra = function(compra){
  cuerpo.innerHTML = "";
  var str = "";
  if(compra == undefined){
    for (var i = 0; i < this.compra.length; i++) {
      str += "<div>";
      str += "<img src='" + this.compra[i].foto + "' alt = '";
      str += this.compra[i].nombre + "'>";
      str += "<p>Producto: " + this.compra[i].nombre + "</p>";
      str += "<p>Descripcion: " + this.compra[i].descripcion + "</p>";
      str += "<p><b>Precio: " + this.compra[i].precio + "€</b></p>";
      str += "</div>"
    }
  }else {
    for (var i = 0; i < compra.length; i++) {
      str += "<div>";
      str += "<img src='" + compra[i].foto + "' alt = '";
      str += compra[i].nombre + "'>";
      str += "<p>Producto: " + compra[i].nombre + "</p>";
      str += "<p>Descripcion: " + compra[i].descripcion + "</p>";
      str += "<p><b>Precio: " + compra[i].precio + "€</b></p>";
      str += "</div>"
    }
  }
  cuerpo.innerHTML = str;
}
}
