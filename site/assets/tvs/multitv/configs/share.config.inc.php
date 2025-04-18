<?php
$settings['display'] = 'vertical';

$settings['fields'] = array(
	'title' => array(
		'caption' => 'Заголовок (обязателен!!!)',
		'type' => 'text'
	),
	'type' => array(
		'caption' => 'Тип',
		'type' => 'dropdown',
		'elements' => '==||ВКонтакте==vk||Одноклассники==ok||Telegram==telegram||Твиттер==twitter||Фейсбук==facebook||Viber==viber||Скриншот==photo'
	)
);

$settings['templates'] = array(
	'outerTpl' => '<div class="share-icons"><div class="icons"><ul class="share-icons-menu"><li><a class="icon-share" href="[!getFullUrl!]#" down-link="share" title="Поделиться"></a><ul class="submenu">[+wrapper+]</ul></li></ul></div></div>',
	'rowTpl' => '<li><a class="icon-[+type+]" href="[!getFullUrl!]#" down-link="[+type+]" title="[+title+]"></a></li>'
);

$settings['configuration'] = array(
	'enablePaste' => false,
	'csvseparator' => ';'
);
