<?php
$data = file_get_contents("php://input"); 
$objData = json_decode($data);
$wordFile = file_get_contents("wordsEn.txt");
$firstLetter = null;
$lastLetter = null;
$length = null;
if(array_key_exists('firstL', $objData)){
	$firstLetter = $objData->firstL;
}
if(array_key_exists('lastL', $objData)){
	$lastLetter = $objData->lastL;
}
if(array_key_exists('len', $objData)){
	$length = $objData->len;
}
if(empty($length)){
	$length = "*";
	if(!empty($firstLetter) && !empty($lastLetter)){
	$pattern = "/\b".(string)$firstLetter."\w".(string)($length).(string)$lastLetter."\b/m";
	#var_dump("first");
	}
	if(empty($firstLetter) && !empty($lastLetter)){
	$pattern = "/\b\w".(string)($length).(string)$lastLetter."\b/m";

	}	
	if(!empty($firstLetter) && empty($lastLetter)){
	$pattern = "/\b".(string)$firstLetter."\w".(string)($length)."\b/m";
		#var_dump("third");

	}
	if(empty($firstLetter) && empty($lastLetter)){
	$pattern = "/\b\w".(string)($length)."\b/m";
		#var_dump("fourth");

	}

}
else{
	if(!empty($firstLetter) && !empty($lastLetter)){
	$pattern = "/\b".(string)$firstLetter."\w{".((int)$length-2)."}".(string)$lastLetter."\b/m";
	#var_dump("firstb");
	}
	if(empty($firstLetter) && !empty($lastLetter)){
		$pattern = "/\b\w{".((int)$length-1)."}".(string)$lastLetter."\b/m";
		#var_dump("secondb");

	}
	if(!empty($firstLetter) && empty($lastLetter)){
	$pattern = "/\b".(string)$firstLetter."\w{".((int)$length-1)."}\b/m";
		#var_dump("thirdb");

	}
	if(empty($firstLetter) && empty($lastLetter)){
	$pattern = "/\b\w{".(string)$length."}\b/m";
		#var_dump("fourthb");

	}	
}
	#var_dump("length2");
	#var_dump(empty($length));
		#var_dump($length);

	#var_dump("]]]");

$length = preg_match_all($pattern, $wordFile, $matches);
for($i = 0; $i < $length; $i++){
	echo "".$matches[0][$i].", ";
}

