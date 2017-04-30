<?php 
require_once 'vendor/autoload.php';
use LearnosityQti\Converter;

$question = json_decode(file_get_contents('item.json'), true);
list($xmlString, $manifest) = Converter::convertLearnosityToQtiItem($question);

var_dump($xmlString);   
var_dump($manifest);
?> 