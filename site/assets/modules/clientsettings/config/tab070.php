<?php
return array (
	'caption' => 'TELEGRAM',
	'introtext' => '<b style="color: red">Доступы к Боту, группам, какналам в Telegram</b>',
	'settings' => array (
		'email_bot' => array (
			'caption' => 'Email отправителя форм',
			'type' => 'text',
			'note' => '',
			'default_text' => '',
		),
		'email_bot_name' => array (
			'caption' => 'Имя  отправителя форм',
			'type' => 'text',
			'note' => '',
			'default_text' => '',
		),
		'tlg_token' => array (
			'caption' => 'Токен бота',
			'type' => 'text',
			'note' => 'Бот должен быть участником канала, группы',
			'default_text' => '',
		),
		'tlg_chanel' => array (
			'caption' => 'ID канала',
			'type' => 'text',
			'note' => 'Получить с помощю Бота https://t.me/username_to_id_bot',
			'default_text' => '',
		),
		'tlg_group' => array (
			'caption' => 'ID группы',
			'type' => 'text',
			'note' => 'Получить с помощю Бота https://t.me/username_to_id_bot',
			'default_text' => '',
		),
		'chat_id' => array (
			'caption' => 'ID разрапотчика',
			'type' => 'text',
			'note' => 'Получить с помощю Бота https://t.me/username_to_id_bot',
			'default_text' => '83741005',
		),
	),
);