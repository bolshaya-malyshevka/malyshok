<?php
use ProjectSoft\Video;

if(!defined('MODX_BASE_PATH')) die('What are you doing? Get out of here!');

$url = isset($url) ? $url : '';
$vd = new Video(null, false);
$arr = $vd->setLink($url);
$type = isset($type) ? $type : 'link';
$return = "";

switch($type) {
	case 'link':
		$return = $arr['link'] ? $arr['link'] : "";
		break;
	case 'video':
		$return = $arr['video'] ? $arr['video'] : "";
		break;
	case 'image':
		$return = $arr['image'] ? $arr['image'] : "";
		break;
	case 'json':
		$return = json_encode($arr);
		break;
	default:
		$return = $arr['image'] ? $arr['image'] : "";
		break;
}
return $return;
//return $arr['video'] ? $arr['video'].'<p class="text-center"><a href="' . $url . '" target="_blank" savefrom_lm="0">' . $url . '</a></p>' : "";