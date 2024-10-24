document.addEventListener('DOMContentLoaded', function() {
    // Función para cargar opciones en el select
    function cargarBodegas() {
         var xhr = new XMLHttpRequest();

        xhr.open('GET', 'backend/bodegas.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                 var bodegas = JSON.parse(xhr.responseText);
                // Obtener el select de bodegas
                var selectBodega = document.getElementById('bodega');
                selectBodega.innerHTML = '<option value=""></option>';

                bodegas.forEach(function(bodega) {
                    var option = document.createElement('option');
                    option.value = bodega.id;
                    option.text = bodega.nombre;
                    selectBodega.appendChild(option);
                });
            } else {
                console.error('Error al cargar las bodegas');
            }
        };
        // Enviar la solicitud
        xhr.send();
    }

    function cargarMonedas() {
        var xhr = new XMLHttpRequest();

       xhr.open('GET', 'backend/monedas.php', true);
       xhr.onload = function() {
           if (xhr.status === 200) {
                var bodegas = JSON.parse(xhr.responseText);
               // Obtener el select de bodegas
               var selectBodega = document.getElementById('moneda');
               selectBodega.innerHTML = '<option value=""></option>';

               bodegas.forEach(function(bodega) {
                   var option = document.createElement('option');
                   option.value = bodega.id;
                   option.text = bodega.nombre;
                   selectBodega.appendChild(option);
               });
           } else {
               console.error('Error al cargar las monedas');
           }
       };
       // Enviar la solicitud
       xhr.send();
   }


    // Llamar a la función para cargar las bodegas al cargar la página
    cargarBodegas();
    cargarMonedas();
});