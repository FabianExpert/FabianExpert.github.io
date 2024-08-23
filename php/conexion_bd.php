<?php
// Conexión a la base de datos (asumiendo que tienes los datos correctos)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "comentarios";

$conexion = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);   

}

// Obtener datos del formulario   
 y sanitizarlos
$nombre = isset($_POST['full_name']) ? mysqli_real_escape_string($conexion, $_POST['full_name']) : "";
$email = isset($_POST['email']) ? mysqli_real_escape_string($conexion, $_POST['email']) : "";
$telefono = isset($_POST['phone_number']) ? mysqli_real_escape_string($conexion, $_POST['phone_number']) : "";
$comentarios = isset($_POST['comments']) ? mysqli_real_escape_string($conexion, $_POST['comments']) : "";

// Preparar la consulta SQL (utilizando prepared statements es más seguro)
$stmt = $conexion->prepare("INSERT INTO usuarios_comentarios (nombre, email, telefono, comentarios) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nombre, $email, $telefono, $comentarios);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Nuevo registro creado";
} else {
    echo "Error: " . $stmt->error;
}

// Cerrar la conexión y la sentencia
$stmt->close();
$conexion->close();
?>