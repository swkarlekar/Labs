<?php
$data = file_get_contents("php://input"); 
$objData = json_decode($data);
$wordFile = file_get_contents("wordsEn.txt");
$firstLetter = $objData->data;
$pattern = "/^".(string)$firstLetter.".*/m";
preg_match_all($pattern, $wordFile, $matches);
echo json_encode($matches[0]); 
