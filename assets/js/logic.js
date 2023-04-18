//Crear la ventana para aumentar la tarjeta donde se haga click
$(document).ready(function() {
  $("#imagen11").click(function() {
    // Obtener la imagen y la información
    var image = $("#imagen11").find('img');
    var title = $("#imagen11").find('.card-title').text();
    var text = $("#imagen11").find('.card-text').text();
   
        // Crear la ventana modal
        var modal = $('<div>').addClass('modal');
        var modalContent = $('<div>').addClass('modal-content');
        var closeButton = $('<span>').addClass('close').html('&times;');
        var modalImage = $('<img>').attr('src', image.attr('src'));
        var modalTitle = $('<h5>').text(title);
        var modalText = $('<p>').text(text);

    // Agregar contenido a la ventana modal
    
    modalContent.append(closeButton);
    modalContent.append(modalImage);
    modalContent.append(modalTitle);
    modalContent.append(modalText);
    modal.append(modalContent);
    $('body').append(modal);

    // Mostrar la ventana modal
    modal.show();

      // Manejar el clic en la x para cerrar la ventana modal
      closeButton.click(function() {
      modal.remove();
      });
  });
});

//VARIABLES PARA MOSTRAR EL FORMULARIO
var boton = document.getElementById("mostrarContenedorA")
var formularioAA = document.getElementById("contenedorA")

//FUNCION PARA MOSTRAR EL FORMULARIO
function mostrarFormularioA(){
    if (window.innerWidth < 992) {
        boton.addEventListener("click", function () {
          formularioAA.classList.remove("d-none") = "block";
        })
      } else {
      }
}

// FALTA VOLVER A ESCONDER EL FORMULARIO !!

var form = document.querySelector('form'); // selec el formulario. TAMBN PUEDE ESCRIBIR form.addEventListener('submit', function(event)
form.addEventListener('submit', (event) => { // añade un evento de escucha para cuando se envía el formulario
  event.preventDefault(); // previene el comportamiento predeterminado del formulario (EVAKUAR)

  //Declaracion de variables
  var nombre = document.getElementById('inputnombre').value; // obtiene el valor del campo "nombre"
  var correo = document.getElementById('inputEmail4').value; // obtiene el valor del campo "correo"
  var telefono = document.getElementById('inputtelefono').value;
  var motivo = document.getElementById('inputmotivo').value;

  //pedir completar el campo vacio
  if (nombre === "" || nombre === null || nombre === undefined) {
    alert("Por favor, complete el campo Nombre.");
    return;//form.reset() evaluar
  }
  if (correo === "" || correo === null || correo === undefined) {
    alert("Por favor, complete el campo correo.");
    return;
  }  if (telefono === "" || telefono === null || telefono === undefined) {
    alert("Por favor, complete el campo telefono.");
    return;
  }  if (motivo === "" || motivo === null || motivo === undefined) {
    alert("Por favor, complete el campo motivo.");
    return;
  }

  //MENSAJE AGRADECIMIENTO
  alert("¡Gracias por comunicarse con nosotros, " + nombre + ". Nos comunicaremos con usted a su correo " + correo + ".");

  //HAY QUE VOLVER A ESCONDER EL FORMULARIO
  if (formularioAA.classList.contains("d-none")) {
  //dejar en blco para pasar directo al else
  }else{
    formularioAA.classList.add("d-none")
  }
    // resetear el formulario
   // document.getElementById("formularioReserva").reset();
});
//<form class="row g-3" action="pagina_dos.html"></form> ELIMINAMOS EL ACTION DEL HTML ORIGINAL YA QUE AHORA EL AVISO LO DARA JS

//VARIABLES PARA MOSTRAR EL FORMULARIO
var boton2 = document.getElementById("mostrarContenedorB")
var formularioBB = document.getElementById("contenedorB")

//FUNCION PARA MOSTRAR EL FORMULARIO
function mostrarFormularioB(){
    if (window.innerWidth < 992) {
        boton2.addEventListener("click", function () {
          formularioBB.classList.remove("d-none") = "block";
        })
      } else {
      }
}

$(document).ready(function() {
  $('.contenedor2').submit(function(event) {
    event.preventDefault(); // previene el comportamiento predeterminado del formulario

    //Declaracion de variables
    var nombre2 = $('#inputnombre2').val(); // obtiene el valor del campo "nombre"
    var correo2 = $('#inputEmail42').val(); // obtiene el valor del campo "correo"
    var telefono2 = $('#inputtelefono2').val();
    var fecha = $('#inputfecha').val();
    var hora = $('#inputhora').val();
    var inputcantidadAsist = $('#inputcantidadAsist').val();

    //pedir completar el campo vacio
    if (nombre2 === "" || nombre2 === null || nombre2 === undefined) {
      alert("Por favor, complete el campo Nombre.");
      return;
    }
    if (correo2 === "" || correo2 === null || correo2 === undefined) {
      alert("Por favor, complete el campo correo.");
      return;
    }
    if (telefono2 === "" || telefono2 === null || telefono2 === undefined) {
      alert("Por favor, complete el campo telefono.");
      return;
    }
    if (fecha === "" || fecha === null || fecha === undefined) {
      alert("Por favor, complete el campo fecha.");
      return;
    }
    if (hora === "" || hora === null || hora === undefined) {
      alert("Por favor, complete el campo hora.");
      return;
    }
    if (inputcantidadAsist === "" || inputcantidadAsist === null || inputcantidadAsist === undefined) {
      alert("Por favor, complete el campo cantidad de asistentes.");
      return;
    }

    //MENSAJE AGRADECIMIENTO
    alert("Estimado(a): " + nombre2 + ".Agradecemos por reservar con nosotros, hemos registrado " + inputcantidadAsist + " de asistentes. Se ha enviado un codigo de confirmación al correo " + correo2 + ". Gracias por preferirnos.");

    //HAY QUE VOLVER A ESCONDER EL FORMULARIO
    if ($('.formularioBB').hasClass("d-none")) {
      //dejar en blco para pasar directo al else
    } else {
      $('.formularioBB').addClass("d-none");
    }

    // resetear el formulario
    // document.getElementById("formularioReserva").reset();
  });
});

function mostrartarjetas() {
  // Obtener la ventana modal
  var modal = document.getElementById("modalTarjetas2");
  var modal2 = document.getElementById("modalTarjetas3");
  // Obtener las tarjetas ocultas
  //var tarjeta1 = document.getElementById("imagen14");
  //var tarjeta2 = document.getElementById("imagen15");

  // Mostrar la ventana modal
  modal.style.display = "block";

  //tarjeta1.style.display = "block";

  // Agregar evento clic a la flecha derecha
  var nextBtn = modal.querySelector(".next");
  nextBtn.addEventListener("click", function() {
    modal.style.display = "none";
    modal2.style.display = "block";
  });

  // Agregar evento clic a la flecha izquierda
  var prevBtn = modal.querySelector(".prev");
  prevBtn.addEventListener("click", function() {
    modal.style.display = "block";
    modal2.style.display = "none";
  });

  // Mostrar la ventana modal
  //modal3.style.display = "block";

  // Agregar un evento al botón de cerrar
  var cerrar = document.getElementsByClassName("close")[0];
  cerrar.onclick = function() {
    modal3.style.display = "none";
  }
}


//var form2 = document.querySelector('.contenedor2'); // selec el formulario. TAMBN PUEDE ESCRIBIR form.addEventListener('submit', function(event)
//form2.addEventListener('submit', (event) => { // añade un evento de escucha para cuando se envía el formulario
  //event.preventDefault(); // previene el comportamiento predeterminado del formulario (EVAKUAR)

  //Declaracion de variables
 // var nombre2 = document.getElementById('inputnombre2').value; // obtiene el valor del campo "nombre"
  //var correo2 = document.getElementById('inputEmail42').value; // obtiene el valor del campo "correo"
 // var telefono2 = document.getElementById('inputtelefono2').value;
  //var fecha = document.getElementById('inputfecha').value;
 // var hora = document.getElementById('inputhora').value;
 // var inputcantidadAsist = document.getElementById('inputcantidadAsist').value;

  //pedir completar el campo vacio
//  if (nombre2 === "" || nombre2 === null || nombre2 === undefined) {
//    alert("Por favor, complete el campo Nombre.");
//    return;//form.reset() evaluar
 // }
//  if (correo2 === "" || correo2 === null || correo2 === undefined) {
//    alert("Por favor, complete el campo correo.");
//    return;
 // }  if (telefono2 === "" || telefono2 === null || telefono2 === undefined) {
 //   alert("Por favor, complete el campo telefono.");
//    return;
//  }  if (fecha === "" || fecha === null || fecha === undefined) {
//    alert("Por favor, complete el campo fecha.");
//    return;
//  }  if (hora === "" || hora === null || hora === undefined) {
 //   alert("Por favor, complete el campo hora.");
 //   return;
//  } if (inputcantidadAsist === "" || inputcantidadAsist === null || inputcantidadAsist === undefined) {
 //   alert("Por favor, complete el campo cantidad de asistentes.");
//    return;
 // }

  //MENSAJE AGRADECIMIENTO
 // alert("¡Gracias por reservar con nosotros, " + nombre2 + ". Confirmaremos su reserva a su correo " + correo2 + ".");

  //HAY QUE VOLVER A ESCONDER EL FORMULARIO
 // if (formularioBB.classList.contains("d-none")) {
  //dejar en blco para pasar directo al else
 // }else{
 //   formularioBB.classList.add("d-none")
 // }
    // resetear el formulario
   // document.getElementById("formularioReserva").reset();
//});