<?php
$settings['display'] = 'vertical';

$settings['fields'] = array(
	'image' => array(
		'caption' => 'Изображение',
		'type' => 'image'
	),
	'thumb' => array(
		'caption' => 'Thumbnail',
		'type' => 'thumb',
		'thumbof' => 'image'
	),
	'title' => array(
		'caption' => 'Замещающий текст',
		'type' => 'text'
	)
);

$settings['templates'] = array(
	'outerTpl' => '<div id="slick-header">[+wrapper+]</div>',
	'rowTpl' => '<div class="slick-item"><img src="[[thumb? &input=`[+image+]` &options=`w=1140,h=380,zc=C`]]" alt="[+title+]" /><span class="bvi-caption-alt">[+title+]</span></div>'
);
$settings['configuration'] = array(
	'enablePaste' => false,
	'csvseparator' => ';'
);