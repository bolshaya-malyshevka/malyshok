<?php
return array (
	'caption' => 'Оформление сайта',
	'introtext' => '<b style="color: red">Настройки</b>',
	'settings' => array (
		'background_color' => array (
			'caption' => 'Цвет фона',
			'type' => 'custom_tv:rgbcolor',
			'note' => '',
			'default_text' => '#FFFFFF',
		),
		'background_image' => array (
			'caption' => 'Изображение фона',
			'type' => 'image',
			'note' => '',
			'default_text' => '',
		),
		'background_attachment' => array (
			'caption' => 'Тип Фона',
			'type' => 'dropdown',
			'elements' => 'Нет значения== ||Прокручивающийся==scroll||Фиксированный==fixed',
		),
		'background_position' => array (
			'caption' => 'Позиция Фона',
			'type' => 'dropdown',
			'elements' => 'Нет значения== ||Центр Центр==background-position: center center;||Верх Центер==background-position: top center;||Низ Центер==background-position: bottom center;||Верх Левый==background-position: top left;||Верх правый==background-position: top right;||Низ Левый==background-position: bottom left;||Низ Правый==background-position: bottom right;',
		),
		'background_repeat' => array (
			'caption' => 'Повторение Фона',
			'type' => 'dropdown',
			'elements' => 'Нет значения== ||Повторять==background-repeat: repeat;||Повторять по оси X==repeat-x;||Повторять по оси Y==repeat-y;||Не поторять==background-repeat: no-repeat;',
		),
		'background_size' => array (
			'caption' => 'Позиция Фона',
			'type' => 'dropdown',
			'elements' => 'Нет значения== ||Автоматический==background-size: auto auto;||Ковер==background-size: cover;||Контейнер==background-size: contain;',
		),
	),
);