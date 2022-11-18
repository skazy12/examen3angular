<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "angdb";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);



if (isset($_GET["consultar"])){
    $sqlGames = mysqli_query($conexionBD,"SELECT * FROM games WHERE id=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlGames) > 0){
        $game = mysqli_fetch_all($sqlGames,MYSQLI_ASSOC);
        echo json_encode($game);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["borrar"])){
    $sqlGames = mysqli_query($conexionBD,"DELETE FROM games WHERE id=".$_GET["borrar"]);
    if($sqlGames){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $descripcion=$data->descripcion;
    $precio=$data->precio;
    $image=$data->image;
        if(($nombre!="")&&($precio!="")){
            
    $sqlGames = mysqli_query($conexionBD,"INSERT INTO games(nombre,descripcion,precio,image) VALUES('$nombre','$descripcion','$precio','$image')");
    echo json_encode(["success"=>1]);
        }
    exit();
}

if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar"];
    $nombre=$data->nombre;
    $descripcion=$data->descripcion;
    $precio=$data->precio;
    $image=$data->image;
    
    $sqlGames = mysqli_query($conexionBD,"UPDATE games SET nombre='$nombre', descripcion='$descripcion', precio='$precio', image='$image' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}

$sqlGames = mysqli_query($conexionBD,"SELECT * FROM games");
if(mysqli_num_rows($sqlGames) > 0){
    $game = mysqli_fetch_all($sqlGames,MYSQLI_ASSOC);
    echo json_encode($game);
}
else{ echo json_encode([["success"=>0]]); }


?>