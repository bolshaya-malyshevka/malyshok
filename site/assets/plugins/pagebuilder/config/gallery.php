<?php

	return [
		'title' => 'Page Gallery',

//		'show_in_templates' => [5],

//		'show_in_docs' => [ 82 ],

//		'hide_in_docs' => [ 10, 63 ],

		'order' => 3,

//		'container' => ['programms'],

		'templates' => [
			'owner' => '
				<div class="gallery">
				[+text:ifnotempty=`<h3 class="text-center gallery-title">`+][+text+][+text:ifnotempty=`</h3>`+]
					<ul class="gallery--list">
						[+documents+]
					</ul>
				</div>
			',
			'documents' => '
				<li class="gallery--list-item">
					<a class="gallery--list-item-link" target="_blank" href="[+file+]" download="[+text+]" data-fancybox-group="photogallery" data-fancybox="photogallery" data-caption="[+text:ifempty=`[*pagetitle:hsc*]`+]" data-loop="true" download="[+text:ifempty=`[*pagetitle:hsc*]`+]">
						<img class="gallery--list-item-link-image" src="[[thumb? &input=`[+file+]` &options=`w=375,h=240,zc=C`]]" alt="[+text+]">
					</a>
				</li>
			',
		],
		'fields' => [
			'text' => [
				'caption' => 'Название галереи (необязательно)',
				'type'    => 'text',
				'evoSearchIndex' => true,
			],
			'documents' => [
				'caption' => 'Изображения',
				'type'    => 'group',
				'fields'  => [
					'text' => [
						'caption' => 'Название',
						'type'    => 'text',
						'evoSearchIndex' => true,
					],
					'file' => [
						'caption' => 'Изображение',
						'type'    => 'image',
					]
				]
			]
		]
	];