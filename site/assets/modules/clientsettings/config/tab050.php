<?php
if( ! defined('IN_MANAGER_MODE') || IN_MANAGER_MODE !== true) {
	die('<b>INCLUDE_ORDERING_ERROR</b><br /><br />Please use the EVO Content Manager instead of accessing this file directly.');
}

global $modx;

$str = "";
$arrResult = array();

$table_site_content = $modx->getFullTableName('site_content');
$result = $modx->db->query( "SELECT id,pagetitle FROM $table_site_content WHERE parent = 0 AND published = 1 ORDER BY id ASC");

while( $row = $modx->db->getRow( $result ) ) {
	$arrResult[] = $row["pagetitle"] . " (" . $row["id"] . ")==" . $row["id"];
}
$str = implode('||', $arrResult);

return array (
	'caption' => 'НОВОСТИ',
	'introtext' => '<b style="color: red">Настройки для НОВОСТЕЙ</b>',
	'settings' => array (
		'news_id' => array(
			'caption' => 'Ресурс новостей',
			'type' => 'dropdown',
			'elements' => $str,
			'note' => '',
			'default_text' => '',
		),
		'news_count_home' => array(
			'caption' => 'Количество новостей на главной странице',
			'type' => 'number',
			'note' => '',
			'default_text' => '5',
		),
		'news_count' => array(
			'caption' => 'Количество новостей на новостной странице',
			'type' => 'number',
			'note' => '',
			'default_text' => '5',
		),
	),
);

