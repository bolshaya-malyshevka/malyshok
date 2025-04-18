<?php
if(!defined('MODX_BASE_PATH')) die('What are you doing? Get out of here!');

$time = isset($time) ? $time : "10.10.1971 00:00";

$month_arr = array(
	'1' => 'января',
	'2' => 'февраля',
	'3' => 'марта',
	'4' => 'апреля',
	'5' => 'мая',
	'6' => 'июня',
	'7' => 'июля',
	'8' => 'августа',
	'9' => 'сентября',
	'10' => 'октября',
	'11' => 'ноября',
	'12' => 'декабря'
);

if(($data = strtotime($time))):
	/* time */
	$datetime = date("Y-m-d H:i:s", $data);
	$temp = explode(" ", $datetime);
	$datetime = implode('T', $temp);
	$date = date("j.n.Y", $data);
else:
	$datetime = date("Y-m-d H:i:s", intval($data));
	$temp = explode(" ", $datetime);
	$datetime = implode('T', $temp);
	$date = date("j.n.Y", intval($data));
endif;
$list = explode(".", $date);
$out = implode(' ', array(
	$list[0],
	$month_arr[$list[1]],
	$list[2],
	"года"
));
return '<time datetime="' . $datetime . '">' . $out . '</time>';