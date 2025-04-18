<?php
return array (
	'caption' => 'ДИРЕКТОР/ШКОЛА',
	'introtext' => '<b style="color: red">Настройки для Школы</b>',
	'settings' => array (
		'site_description' => array (
			'caption' => 'Описание сайта',
			'type' => 'textareamini',
			'note' => 'Отображается в шапке сайта',
			'default_text' => 'Мы рады видеть Вас на официальном сайте',
		),
		'site_name_org' => array (
			'caption' => 'Расширенное наименование организации',
			'type' => 'text',
			'note' => 'Отображается в подвале',
			'default_text' => 'ГБОУ ООШ с. Большая Малышевка м. р. Кинельский Самарской области',
		),
		'mini_name_org' => array (
			'caption' => 'Наименование организации',
			'type' => 'textareamini',
			'note' => 'Короткое Наименование организации',
			'default_text' => 'ГБОУ ООШ с. Большая Малышевка',
			'style' => 'max-height: 2em;'
		),
		'name_org' => array (
			'caption' => 'Наименование организации',
			'type' => 'textareamini',
			'note' => 'Полное Наименование организации',
			'default_text' => 'Государственное бюджетное общеобразовательное учреждение общая общеобразовательная школа с. Большая Малышевка муниципального района Кинельский Самарской области',
		),
		'org_date' => array(
			'caption' => 'Год основания',
			'type' => 'date',
			'note' => '',
			'default_text' => '14-12-2014 00:00:00',
		),
		'address' => array (
			'caption' => 'Адрес',
			'type' => 'textareamini',
			'note' => 'Адрес Школы',
			'default_text' => '',
		),
		'email' => array (
			'caption' => 'Email Адрес',
			'type' => 'text',
			'note' => 'Email Школы',
			'default_text' => '',
		),
		'phones' => array (
			'caption' => 'Телефоны',
			'type' => 'textareamini',
			'note' => 'Телефоны Школы',
			'default_text' => '',
		),
		'director_position' => array (
			'caption' => 'Должность',
			'type' => 'text',
			'note' => 'Должность Директора Школы',
			'default_text' => 'Директор',
		),
		'director' => array (
			'caption' => 'ФИО',
			'type' => 'text',
			'note' => 'ФИО Директора Школы (занимающий должность полностью)',
			'default_text' => '',
		),
		'director_photo' => array (
			'caption' => 'Фотография<br><span style="color: red;">К размеру 300x300</span>',
			'type' => 'image',
			'note' => 'Фотография Директора',
			'default_text' => '',
		),
		'director_ur_position' => array (
			'caption' => 'Должность УР',
			'type' => 'text',
			'note' => 'Должность УР',
			'default_text' => 'Зам. директора по УР',
		),
		'director_ur' => array (
			'caption' => 'ФИО УР',
			'type' => 'text',
			'note' => 'ФИО по УР (занимающий должность полностью)',
			'default_text' => '',
		),
		'director_ur_photo' => array (
			'caption' => 'Фотография УР<br><span style="color: red;">К размеру 300x300</span>',
			'type' => 'image',
			'note' => 'Фотография УР',
			'default_text' => '',
		),
		'director_vr_position' => array (
			'caption' => 'Должность ВР',
			'type' => 'text',
			'note' => 'Должность ВР',
			'default_text' => 'Зам. директора по ВР',
		),
		'director_vr' => array (
			'caption' => 'ФИО ВР',
			'type' => 'text',
			'note' => 'ФИО по ВР (занимающий должность полностью)',
			'default_text' => '',
		),
		'director_vr_photo' => array (
			'caption' => 'Фотография ВР<br><span style="color: red;">К размеру 300x300</span>',
			'type' => 'image',
			'note' => 'Фотография ВР',
			'default_text' => '',
		),
		'google_map' => array (
			'caption' => 'Google Map',
			'type' => 'text',
			'note' => 'Точка на карте Google',
			'default_text' => '',
		),
		'group_org' => array (
			'caption' => 'Группы в социальных сетях',
			'type' => 'custom_tv:multitv',
			'note' => '',
			'elements' => '',
			'default_text' => '[]',
		),
		'univers' => array (
			'caption' => 'Университеты',
			'type' => 'custom_tv:multitv',
			'note' => 'Куда пойти учиться',
			'elements' => '',
			'default_text' => '[]',
		),
		'govlist' => array (
			'caption' => 'Сайты',
			'type' => 'custom_tv:multitv',
			'note' => 'Сайты внизу страницы',
			'elements' => '',
			'default_text' => '[]',
		),
	),
);

