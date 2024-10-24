<?php
//definir los valores de conexion a la base de datos
class Conexion{
    public $host = 'localhost';
    public $basedatos= 'desafio';
    public $usuario ='postgres';
    public $contrasena='123';
    public $puerto="5432";
    public $motor='pgsql';
    public $conecta;

    public static function conectar(){
        try {
            $conexion = new Conexion();
            $conexion->conecta = new PDO("{$conexion->motor}:host={$conexion->host};port={$conexion->puerto};dbname={$conexion->basedatos}",$conexion->usuario,$conexion->contrasena);
            $conexion->conecta->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            return $conexion->conecta;
          } catch (PDOException $e) {
            echo "Error ". $e->getMessage();
        }
    }

}

