<?php
// Conexión a la base de datos (ajusta estos valores según tu configuración)
require_once "../config/conexion.php";
// Verificar si se recibió el código del producto
if (isset($_POST['productoId'])) {
    $id = $_POST['productoId'];

    // Consulta para verificar si el código existe
    $sql = "SELECT * FROM productos WHERE id =:id";
    $stmt= Conexion::conectar()->prepare($sql);
    $stmt->bindParam(':id',$id);
    $stmt->execute();
    $result = $stmt->fetchAll();

      // Si el código ya existe, devolver 'existe'
    if (isset($result[0])) {
        echo "existe";
    } else {
        echo "valido";
    }

}
