<?php
if(!defined('MODX_BASE_PATH')) die('What are you doing? Get out of here!');

$file = isset($file) ? $file : "";
$real_file = MODX_BASE_PATH . $file;
$out = "";

if(is_file($real_file)):
	$out = pathinfo($real_file, PATHINFO_EXTENSION);
	if($out != ""):
		$out = "." . $out;
	endif;
endif;

return $out;