<?php
$data = file_get_contents("php://input"); 
$objData = json_decode($data);
$name = $objData -> name; 
$email = $objData -> email;
$phoneNumber = $objData -> phoneNumber;
$street = $objData -> street; 
$city = $objData -> city; 
$state = $objData -> state; 
$zip = $objData -> zip;
$cart = $objData -> cart; 

$db = new SQLite3('magazine2.db');

//drop the table if already exists
//$db->exec('DROP TABLE IF EXISTS magazineorders');

//Create a basic table
//$db->exec('CREATE TABLE magazineorders (name text, email text, phoneNumber text, street text, city text, state text, zip text)');

//insert rows
$db->exec('INSERT INTO magazineorders (name, email, phoneNumber, street, city, state, zip) VALUES ("'.(string)$name.'","'.(string)$email.'","'.(string)$phoneNumber.'","'.(string)$street.'","'.(string)$city.'","'.(string)$state.'","'.(string)$zip.'")');

$results = $db->query("SELECT * FROM magazineorders");
while ($row = $results->fetchArray()) {
    $row_json = json_encode($row);
    $obj = json_decode($row_json);
    echo '<div>'.$obj->{'name'}.' | '.$obj->{'email'}.' | '.$obj->{'phoneNumber'}.' | '.$obj->{'street'}.' | '.$obj->{'city'}.' | '.$obj->{'state'}.' | '.$obj->{'zip'}."\n"."</div>";
}
