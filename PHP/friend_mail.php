<?php
$destinatario = 'zeituniannicolas27@gmail.com';
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$fecha = $_POST['fecha'];
$renovacion = $_POST['renovacion'];
$correo = $_POST['correo'];
$comentario = $_POST['comentario'];

mail($destinatario, "aaaaa", "aaa", "aaaaa");
echo "<script>alert('enviado')</script>"
  ?>