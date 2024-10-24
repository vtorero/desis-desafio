document.getElementById('codigoProductow').addEventListener('blur', function() {
    // Obtener el valor del input
    const productoId = this.value;

    // Crear solicitud AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'backend/check.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Manejar la respuesta del servidor
    xhr.onload = function() {
        if (xhr.status === 200) {
            if (xhr.responseText === 'existe') {

                alert("El código del producto ya está registrado.");
            }
        }
    };

    // Enviar el código del producto al servidor
    xhr.send('productoId=' + encodeURIComponent(productoId));
});