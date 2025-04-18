<?php
$settings['display'] = 'vertical';

$settings['fields'] = array(
	'image' => array(
		'caption' => 'Image',
		'type' => 'image'
	),
	'thumb' => array(
		'caption' => 'Thumbnail',
		'type' => 'thumb',
		'thumbof' => 'image'
	),
	'title' => array(
		'caption' => 'Title',
		'type' => 'text'
	),
	'link' => array(
		'caption' => 'Link',
		'type' => 'text'
	)
);

$settings['templates'] = array(
	'outerTpl' => '<div class="images">[+wrapper+]</div>',
	'rowTpl' => '<div class="image"><a href="[+link+]" title="[+title+]" target="_blank"><img src="[+image+]" alt="[+title+]" /></a></div>'
);
$settings['configuration'] = array(
	'enablePaste' => false,
	'csvseparator' => ';'
);
