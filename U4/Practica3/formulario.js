onload = function(){
       function ponFoco(e){
         e.target.style.outline = "purple solid 2px";
       }
       function quitarFoco(e){
         e.target.style.outline="none";
       }
       inputs = document.querySelectorAll("input");

       for (var i = 0; i < inputs.length; i++) {
         select = document.querySelector("select");
         inputs[i].addEventListener("focus",ponFoco);
         select.addEventListener("focus",ponFoco);
       }
       for (var i = 0; i < inputs.length; i++) {
         select = document.querySelector("select");
         inputs[i].addEventListener("blur",quitarFoco);
         select.addEventListener("blur",quitarFoco);
       }




  var formulario = document.forms[0];
  formulario.onsubmit =function(){
    var error = document.getElementsByClassName("errores")[0];
    var errList ="";
    var ret = true;

    //validamos el nombre
    var nom = document.getElementsByName('nombre')[0].value;
    if(nom == null || nom.length==0 || !(/^\S+$/.test(nom))){
    errList += "Error en el nombre, introducelo bien <br/>";
      ret = false;
    }

    //validamos apellidos
    var apellidos = document.getElementsByName('apellidos')[0].value;
    if(apellidos == null || apellidos.length==0 || !(/^\S+[\s?\S+]*$/.test(apellidos))){
      ret = false;
      errList += "Error en el apellido, introducelo bien. <br/>";
    }

    //validamos el email
    var email = document.getElementsByName("email")[0].value;
    if ( ! (/^\w+([\.\-\+]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,4})+$/.test(email)) ){
    errList += "Error en el email, introducelo bien <br/>";
    ret = false;
    }
    var emailRepe = document.getElementById("emailRepe").value;
    if(email != emailRepe){
    errList += "Error, no coinciden los correos.<br/>";
    ret = false;
    }

    //validamos eL dni
    var dni = document.getElementById("dni").value;
      if(dni == null || dni.length==0 || !(/^\d{8}[a-zA-Z]$/.test(dni))){
        errList += "Error en el DNI, introducelo bien <br/>";
        ret = false;
      }


    //validamos la fecha
  var fecha = (document.getElementsByName('fecha')[0].value).split('-');
  var ano=fecha[0];
  var mes=fecha[1];// de 0 a 11
  var dia=fecha[2];// 1 a 31
  var nf= new Date(ano,(mes - 1),dia);

  var hoy = new Date();
  //resto los años de las dos fechas
  var edad = hoy.getFullYear()- ano - 1; //-1 porque no se si ha cumplido años ya este año
  //si resto los meses y me da mayor que 0, ha cumplido años
  if (hoy.getMonth() + 1 - mes > 0){
      edad++;
  }
  //si resto los dias y me da menor que 0 entonces no ha cumplido años.
  //si da mayor o igual si ha cumplido
  if (hoy.getUTCDate() - dia >= 0){
      edad++;
  }
  if ( isNaN(nf) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 0 || ano >= hoy.getFullYear()){
    errList += "Error en la fecha, introducelo bien <br/>"
    ret = false;
  }else if (edad < 18){
    errList += "Error, eres menor de edad no puede inscribirse <br/>"
    ret = false;
  }

  //validamos la selección
     var secc = document.getElementsByName("seccion")[0].selectedIndex;
     if (secc == null || secc == 0){
         errList += "Error, escoja una sección <br/>";
         ret = false;
     }

 //validamos el radiobutton
var escogePago = formulario.pago.value;
// console.log(escogeNick);
if (escogePago != "efectivo" && escogePago != "tarjeta"){
  ret = false;
  errList += "Es necesario que indique si quiere emplear su nombre o prefiere ser anónimo en nuestro foro<br/>";
}


//Consultamos si se ha checqueado los check
 if(!cond.checked){
   ret=false;
   errList += "No has aceptado las condiciones de alta";
 }

        if (document.getElementsByName("seccion")[0].value == "discos") {
           document.forms[0].action = "discos.html";
         }else if (document.getElementsByName("seccion")[0].value == "libros") {
           document.forms[0].action = "libros.html";
         }
         else {
           document.forms[0].action = "tecnologia.html";
         }


    if (ret){
   errList += "Tu petición se ha enviado correctamente";
     error.style.color="blue";
     document.getElementById("enviar").value = "Enviando...";
     document.getElementById("enviar").disabled = true;
   }else{
     error.style.color="red";
   }

   error.innerHTML =  errList;
   return ret;
   return false;

}

}
