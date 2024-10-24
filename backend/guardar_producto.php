<?php
require_once "producto.modelo.php";
echo json_encode(Producto::guardarProducto(),false);