// Cargar sucursales dinámicamente según la bodega seleccionada
function cargarSucursales() {
  let bodegaId = document.getElementById("bodega").value;
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "backend/cargar_sucursales.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    if (xhr.status === 200) {
        var sucursales = JSON.parse(xhr.responseText);
        var selectSucursal = document.getElementById('sucursal');

        // Limpiar las opciones anteriores
        selectSucursal.innerHTML = '<option value=""></option>';

        // Llenar el select con las sucursales obtenidas
        sucursales.forEach(function(sucursal) {
            var option = document.createElement('option');
            option.value = sucursal.id;
            option.text = sucursal.nombre;
            selectSucursal.appendChild(option);
        });
    } else {
        console.error('Error al cargar las sucursales');
    }
  };
  xhr.send("bodegaId=" + bodegaId);
}

//Envia los datos del formulario a la base de datos

document.getElementById('formularioProducto').addEventListener('submit', function (e) {
    e.preventDefault();
    let codigo = document.getElementById("codigoProducto").value;
    let nombre = document.getElementById("nombreProducto").value;
    let precio = document.getElementById("precio").value;
    let descripcion = document.getElementById("descripcion").value;
    let materiales = document.querySelectorAll('input[name="material[]"]:checked');

    if (codigo == "") {
        alert("El código del producto no puede estar en blanco.");
           return false;
       }

        const xhrV = new XMLHttpRequest();
       xhrV.open("POST", "backend/check.php", true);
       xhrV.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

     // Manejar la respuesta del servidor
     xhrV.onload = function () {
       if (xhrV.status === 200) {
            console.log("response",xhrV.response);
        if (xhrV.response === "existe") {
             alert("El código del producto ya esta registrados.");
           return false;
          }
         }
       }
      // Enviar el código del producto al servidor
      xhrV.send("productoId=" + codigo);




       var codigoRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
       if (!codigoRegex.test(codigo)) {
         alert("El código del producto debe contener letras y números");
         return false;
       }


    // Validar nombre del producto
    if (codigo.length < 5 || codigo.length > 15) {
        alert("El código del producto debe tener entre 5 y 15 caracteres.");
        return false;
      }

      if (nombre == "") {
        alert("El nombre del producto no puede estar en blanco.");
           return false;
       }
  // Validar nombre del producto
  if (nombre.length < 2 || nombre.length > 50) {
    alert("El nombre del producto debe tener entre 2 y 50 caracteres.");
    return false;
  }
      // Validar que se haya seleccionado una bodega
      if (document.getElementById("bodega").value === "") {
        alert("Debe seleccionar una bodega.");
        return false;
      }

      // Validar que se haya seleccionado una sucursal
      if (document.getElementById("sucursal").value === "") {
        alert("Debe seleccionar una sucursal.");
        return false;
      }
      // Validar que se haya seleccionado una MONEDA
      if (document.getElementById("moneda").value == "") {
        alert("Debe seleccionar una moneda.");
        return false;
      }
//Validar precio que no este vacio
if (precio == "") {
    alert("El precio del producto no puede estar en blanco.");
    return false;
  }

  // Validar precio (número positivo con hasta dos decimales)
  let precioRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
  if (!precioRegex.test(precio)) {
    alert("El precio debe ser un número positivo con hasta dos decimales.");
    return false;
  }

  // Validar que se seleccionen al menos dos materiales
  if (materiales.length < 2) {
    alert("Debe seleccionar al menos dos materiales.");
    return false;
  }

  // Validar descripción
  if (descripcion.length < 10 || descripcion.length > 1000) {
    alert("La descripción debe tener entre 10 y 1000 caracteres.");
    return false;
  }
    const formData = new FormData(this);

    // Configurar la solicitud AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'backend/guardar_producto.php', true);

    // Configurar lo que ocurrirá cuando obtengamos una respuesta
    xhr.onload = function () {
        if (this.status === 200) {
           if (xhr.responseText == "exitosnull"){
            alert("producto grabado correctamente!")
            document.getElementById("formularioProducto").reset();
        }else{
            alert(xhr.responseText);
        }
    }
    };

    // Enviar los datos del formulario
    xhr.send(formData);
});

function validaId(id)  {

    const xhr = new XMLHttpRequest();
      xhr.open("POST", "backend/check.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Manejar la respuesta del servidor
    xhr.onload = function () {
      if (xhr.status === 200) {
       if (xhr.responseText == 'existe') {
          return false;
         }
        }
      }
     // Enviar el código del producto al servidor
    xhr.send("productoId=" + id);
  }