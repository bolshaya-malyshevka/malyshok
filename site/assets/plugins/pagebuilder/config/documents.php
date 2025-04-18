<?php

	return [
		'title' => 'Page Documents',

//		'show_in_templates' => [5, 7, 8, 9],

//		'show_in_docs' => [ 82 ],

//		'hide_in_docs' => [ 10, 63 ],

		'order' => 2,

//		'container' => ['programms'],

		'templates' => [
			'owner' => '
				<div class="documents">
				[+text:ifnotempty=`<h3 class="text-center news-title">`+][+text+][+text:ifnotempty=`</h3>`+]
					<ul class="documents--list">
						[+documents+]
					</ul>
				</div>
			',
			'documents' => '
				<li class="documents--list-item">
					<a target="_blank" href="[+file+]" download="[+text+][[FileExt? &file=`[+file+]`]]">[+text+]</a>
				</li>
			',
		],
		'fields' => [
			'text' => [
				'caption' => 'Название блока (необязательно)',
				'type'    => 'text',
				'evoSearchIndex' => true,
			],
			'documents' => [
				'caption' => 'Документы',
				'type'    => 'group',
				'fields'  => [
					'text' => [
						'caption' => 'Название',
						'type'    => 'text',
						'evoSearchIndex' => true,
					],
					'file' => [
						'caption' => 'Файл',
						'type'    => 'file',
					]
				]
			]
		]
	];
