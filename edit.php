<?php 

$json = json_decode($_POST["x"]);
$file = fopen("test.json", "w") or die ("bad things");
fwrite($file, $json);
fclose($file);

?>
