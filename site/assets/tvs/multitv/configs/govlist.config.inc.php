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
	'outerTpl' => '<div class="sites">[+wrapper+]</div>',
	'rowTpl' => '<div class="column sites-link"><a href="[+link+]" title="[+title+]" target="_blank"><img src="[[thumb? &input=`[+image+]` &options=`w=195,h=88,zc=C`]]" alt="[+title+]" /><div class="bvi-caption-alt">[+title+]</div></a></div>'
);
