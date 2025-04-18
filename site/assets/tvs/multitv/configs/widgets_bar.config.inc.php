<?php
$settings['display'] = 'vertical';

$settings['fields'] = array(
	'title' => array(
		'caption' => 'Заголовок (необязательно)',
		'type' => 'text'
	),
	'content' => array(
		'caption' => 'Richtext',
		'type' => 'richtext'
	),
	'css' => array(
		'caption' => 'Отдельные классы для виджета',
		'type' => 'text'
	)
);

$settings['templates'] = array(
	'outerTpl' => '[+wrapper+]',
	'rowTpl' => "<div class=\"widget[+css:ne=``:then=` [+css+]`+]\"><article class=\"widget-article\">[+title:ne=``:then=`<header class=\"widget-article-header\"><h3 class=\"widget-article-title\">[+title+]</h3></header>`+]<div class=\"widget-article-content\">[+content+]</div></article></div>"
);

$settings['configuration'] = array(
	'enablePaste' => false,
	'csvseparator' => ';'
);