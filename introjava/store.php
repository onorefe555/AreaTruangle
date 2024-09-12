<?php
$myfile = fopen("location.txt", "w");

$txt = "lat :"  . $_GET["lat"]; ."\nlong :" .GET_["long"]; 
fwrite($myfile, $txt);
fclose($myfile);
?>
