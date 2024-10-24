<?php
require_once "../config/conexion.php";

class Producto extends Conexion
{
//funcion para mostrar bodegas
public static function mostrarBodegas(){
try {
    $sql= "SELECT * FROM bodegas";
    $stmt= Conexion::conectar()->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll();
    return $result;
} catch (PDOException $e) {
    echo $e->getMessage();
}
}

//funcion para mostrar bodegas
public static function mostrarMonedas(){
    try {
        $sql= "SELECT * FROM monedas";
        $stmt= Conexion::conectar()->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();

        return $result;
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
    }

//funcion para mostrar sucursales de la bodega seleccionada
public static function mostrarSucursales($id){
    try {
        $sql= "SELECT * FROM sucursales where idbodega=:id";
        $stmt= Conexion::conectar()->prepare($sql);
        $stmt->bindParam(':id',$id);
        $stmt->execute();
        $result = $stmt->fetchAll();
        return $result;
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
    }

//funcion para grabar un producto
public static function guardarProducto(){
try {
    $txt_material='';
    if(isset($_POST['material'])){
    foreach($_POST['material'] as $material) {
        $txt_material .=' '.$material;
    }
    }
    $sql="INSERT INTO productos (id,nombre,bodega,sucursal,moneda,precio,materiales,descripcion) VALUES
    (:id,:nombre,:bodega,:sucursal,:moneda,:precio,:materiales,:descripcion)";
    $stmt= Conexion::conectar()->prepare($sql);
    $stmt->bindParam(':id',$_POST['codigoProducto']);
    $stmt->bindParam(':nombre',$_POST['nombreProducto']);
    $stmt->bindParam(':bodega',$_POST['bodega']);
    $stmt->bindParam(':sucursal',$_POST['sucursal']);
    $stmt->bindParam(':moneda',$_POST['moneda']);
    $stmt->bindParam(':precio',$_POST['precio']);
    $stmt->bindParam(':materiales',$txt_material);
    $stmt->bindParam(':descripcion',$_POST['descripcion']);
    $stmt->execute();
    echo "exitos";
    } catch (PDOException $e) {
    echo $e->getMessage();
        }
    }
}