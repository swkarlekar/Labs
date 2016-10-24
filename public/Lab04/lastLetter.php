<?php
$data = file_get_contents("php://input"); 
$objData = json_decode($data);
$wordFile = file_get_contents("wordsEn.txt");
$lastLetter = $objData->data;
$pattern = "/\b\w*".(string)$lastLetter."$/m";
preg_match_all($pattern, $wordFile, $matches);
echo json_encode($matches[0]); 
