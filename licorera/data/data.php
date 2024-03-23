<?php


$nombre = $_POST['nombre'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Nunca almacenes contraseñas en texto plano

// Configura tus parámetros de conexión a MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registros";

// Crea conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica conexión
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

$sql = "INSERT INTO clientes (nombre, email, contraseña) VALUES ('$nombre', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
  // echo '<script>alert("¡Formulario enviado con éxito!");</script>';
  //header("Location: http://localhost/licorera/view/");
  echo '<script>
  var confirmacion = alert("¡Formulario enviado con éxito!");
      window.location.href = "http://localhost/licorera/view/";

</script>';
  // echo json_encode("Nuevo registro creado.");
} else {
  echo json_encode("Error: " . $sql . "<br>" . $conn->error);
}

$conn->close();
?>
