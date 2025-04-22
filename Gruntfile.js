module.exports = function(grunt) {
	require('dotenv').config();
	const DEBUG = parseInt(process.env.DEBUG) || false;
	const crypto = require("crypto");
	var fs = require('fs'),
		path = require('path'),
		util = require('util'),
		chalk = require('chalk'),
		PACK = grunt.file.readJSON('package.json'),
		versions = "1739789903848",
		update = "2";

	var gc = {
		fontvers: `${PACK.version}`,
		assets: "assets/templates/projectsoft",
		gosave: "site/assets/templates/projectsoft",
		default: [
			"clean:all",
			"webfont",
			//"ttf2eot",
			"ttf2woff",
			"ttf2woff2",
			"imagemin",
			"tinyimg",
			"concat",
			"uglify",
			"less",
			"autoprefixer",
			"group_css_media_queries",
			"replace",
			"cssmin",
			"pug",
			"copy",
			"lineending"
		],
		speed: [
			//"clean:all",
			//"imagemin",
			//"tinyimg",
			"concat",
			"uglify",
			"less",
			"autoprefixer",
			"group_css_media_queries",
			"replace",
			"cssmin",
			"copy",
			"pug",
			"lineending"
		]
	};

	/**
	 * Конфигурация FTP соединения.
	 * Формат файла .ftppass
		```json
		{
			"bmalysh": {
				"username": "",
				"password": ""
			}
		}
		```
	 */
	try {
		let ftppass = grunt.file.readJSON('.ftppass');
		gc.default.push("ftp_upload");
		gc.speed.push("ftp_upload");
	}catch(e){}

	const NpmImportPlugin = require("less-plugin-npm-import");
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	grunt.initConfig({
		globalConfig : gc,
		pkg : PACK,
		clean: {
			options: {
				force: true
			},
			all: [
				'test/',
				'tests/'
			]
		},
		concat: {
			options: {
				separator: "\n",
			},
			appjs: {
				src: [
					'bower_components/jquery/dist/jquery.js',

					//"bower_components/fancybox/src/js/core.js",

					//'src/js/media.js',

					//"bower_components/fancybox/src/js/guestures.js",
					//"bower_components/fancybox/src/js/slideshow.js",
					//"bower_components/fancybox/src/js/fullscreen.js",
					//"bower_components/fancybox/src/js/thumbs.js",
					//"bower_components/fancybox/src/js/hash.js",
					//"bower_components/fancybox/src/js/wheel.js",

					'bower_components/slick-carousel/slick/slick.js',
					'bower_components/js-cookie/src/js.cookie.js',
					'bower_components/jquery.cookie/jquery.cookie.js',
					'bower_components/inputmask/dist/jquery.inputmask.js'
				],
				dest: '<%= globalConfig.gosave %>/js/appjs.js'
			},
			bvi: {
				src: [
					'bower_components/button-visually-impaired-javascript/dist/js/bvi.js',
				],
				dest: '<%= globalConfig.gosave %>/js/bvi.js'
			},
			main: {
				src: [
					'src/js/main.js'
				],
				dest: '<%= globalConfig.gosave %>/js/main.js'
			},
			emoji: {
				src: [
					//'src/js/title-tooltip.js',
					//'src/js/position.js',
					'src/js/emoji.js'
				],
				dest: '<%= globalConfig.gosave %>/js/emoji.js'
			},
			emoji_mod: {
				src: [
					//'src/js/title-tooltip.js',
					//'src/js/position.js',
					'src/js/emoji.js'
				],
				dest: 'site/assets/plugins/dashboard_widgets/help_widget/js/emoji.js'
			}
		},
		uglify: {
			options: {
				sourceMap: false,
				compress: {
					drop_console: false
				},
				output: {
					ascii_only: true
				}
			},
			app: {
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'<%= globalConfig.gosave %>/js/appjs.js',
							'<%= globalConfig.gosave %>/js/main.js',
							'<%= globalConfig.gosave %>/js/bvi.js',
							'<%= globalConfig.gosave %>/js/emoji.js'
						],
						dest: '<%= globalConfig.gosave %>/js',
						filter: 'isFile',
						rename: function (dst, src) {
							return dst + '/' + src.replace('.js', '.min.js');
						}
					},
					{
						expand: true,
						flatten : true,
						src: [
							'site/assets/plugins/dashboard_widgets/help_widget/js/emoji.js'
						],
						dest: 'site/assets/plugins/dashboard_widgets/help_widget/js/',
						filter: 'isFile',
						rename: function (dst, src) {
							return dst + '/' + src.replace('.js', '.min.js');
						}
					}
				]
			},
		},
		webfont: {
			icons: {
				src: 'src/glyphs/*.svg',
				dest: 'src/fonts/',
				options: {
					hashes: true,
					relativeFontPath: '@{fontpath}',
					destLess: 'src/less/fonts',
					font: 'iconssite',
					types: 'ttf',
					fontFamilyName: 'IconsSite',
					stylesheets: ['less'],
					syntax: 'bootstrap',
					engine: 'node',
					autoHint: false,
					execMaxBuffer: 1024 * 200,
					htmlDemo: false,
					version: gc.fontVers,
					normalize: true,
					startCodepoint: 0xE900,
					iconsStyles: false,
					templateOptions: {
						fontfaceStyles: false,
						baseClass: '',
						classPrefix: 'icon-'
					},
					embed: false,
					template: 'src/font-build.template'
				}
			},
		},
		less: {
			css: {
				options : {
					compress: false,
					ieCompat: false,
					plugins: [
						new NpmImportPlugin({prefix: '~'})
					],
					modifyVars: {
						'hashes': versions + update,
						'fontpath': '/<%= globalConfig.assets %>/fonts',
						'imgpath': '/<%= globalConfig.assets %>/images',
						'white': '#ffffff',
						'bgcolor': '#1e73be',
						'padding': '15px',
					}
				},
				files : {
					'test/css/main.css' : [
						'src/less/main.less'
					],
					'test/css/tinymce.css' : [
						'src/less/style.less'
					],
					'<%= globalConfig.gosave %>/css/bvi.css': [
						'src/less/bvi/scss/bvi.less'
					],
					'<%= globalConfig.gosave %>/css/emoji.css': [
						'src/less/emoji.less'
					],
					'site/assets/plugins/dashboard_widgets/help_widget/css/emoji.css': [
						'src/less/emoji.less'
					],
				}
			},
		},
		autoprefixer:{
			options: {
				browsers: [
					"last 4 version"
				],
				cascade: true
			},
			css: {
				files: {
					'test/css/prefix.main.css' : [
						'test/css/main.css'
					],
					'test/css/prefix.tinymce.css' : [
						'test/css/tinymce.css'
					],
					'<%= globalConfig.gosave %>/css/emoji.css' : [
						'<%= globalConfig.gosave %>/css/emoji.css'
					],
					'site/assets/plugins/dashboard_widgets/help_widget/css/emoji.css' : [
						'site/assets/plugins/dashboard_widgets/help_widget/css/emoji.css'
					]
				}
			},
		},
		group_css_media_queries: {
			group: {
				files: {
					'test/css/media/main.css': ['test/css/prefix.main.css'],
					'test/css/media/tinymce.css': ['test/css/prefix.tinymce.css'],
					'<%= globalConfig.gosave %>/css/emoji.css': ['<%= globalConfig.gosave %>/css/emoji.css'],
					'site/assets/plugins/dashboard_widgets/help_widget/css/emoji.css': ['site/assets/plugins/dashboard_widgets/help_widget/css/emoji.css']
				}
			},
		},
		replace: {
			css: {
				options: {
					patterns: [
						{
							match: /\/\*.+?\*\//gs,
							replacement: ''
						},
						{
							match: /\r?\n\s+\r?\n/g,
							replacement: '\n'
						}
					]
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'test/css/media/main.css'
						],
						dest: 'test/css/replace/',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten : true,
						src: [
							'test/css/media/main.css'
						],
						dest: '<%= globalConfig.gosave %>/css/',
						filter: 'isFile'
					},
					/* TinyMCE */
					{
						expand: true,
						flatten : true,
						src: [
							'test/css/media/tinymce.css'
						],
						dest: 'test/css/replace/',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten : true,
						src: [
							'test/css/media/tinymce.css'
						],
						dest: '<%= globalConfig.gosave %>/css/',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten : true,
						src: [
							'<%= globalConfig.gosave %>/css/emoji.css'
						],
						dest: '<%= globalConfig.gosave %>/css/',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten : true,
						src: [
							'site/assets/plugins/dashboard_widgets/help_widget/css/emoji.css'
						],
						dest: 'site/assets/plugins/dashboard_widgets/help_widget/css/',
						filter: 'isFile'
					}
				]
			},
		},
		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			minify: {
				files: {
					'<%= globalConfig.gosave %>/css/main.min.css' : ['test/css/replace/main.css'],
					'<%= globalConfig.gosave %>/css/tinymce.min.css' : ['test/css/replace/tinymce.css'],
					'<%= globalConfig.gosave %>/css/bvi.min.css' : ['<%= globalConfig.gosave %>/css/bvi.css'],
					'<%= globalConfig.gosave %>/css/emoji.min.css' : ['<%= globalConfig.gosave %>/css/emoji.css'],
					'site/assets/plugins/dashboard_widgets/help_widget/css/emoji.min.css' : ['site/assets/plugins/dashboard_widgets/help_widget/css/emoji.css'],
				}
			},
		},
		lineending: {
			dist: {
				options: {
					eol: 'lf'
				},
				files: [
					{
						expand: true,
						cwd: 'site/assets',
						src: ['**/*.{css,js,php,json,html}'],
						dest: 'site/assets'
					},
					{
						expand: true,
						cwd: 'site/comon',
						src: ['**/*.{css,js,php,json,html}'],
						dest: 'site/comon'
					}
				]
			}
		},
		imagemin: {
			options: {
				optimizationLevel: 3,
				svgoPlugins: [
					{
						removeViewBox: false
					}
				]
			},
			base: {
				files: [
					{
						expand: true,
						cwd: 'src/images', 
						src: ['**/*.{png,jpg,jpeg}'],
						dest: 'test/images/',
					},
					{
						expand: true,
						flatten : true,
						src: [
							'src/images/*.{gif,svg}'
						],
						dest: '<%= globalConfig.gosave %>/images/',
						filter: 'isFile'
					}
				]
			}
		},
		tinyimg: {
			dynamic: {
				files: [
					{
						expand: true,
						cwd: 'test/images', 
						src: ['**/*.{png,jpg,jpeg}'],
						dest: '<%= globalConfig.gosave %>/images/'
					}
				]
			}
		},
		ttf2eot: {
			default: {
				src: 'src/fonts/*.ttf',
				dest: '<%= globalConfig.gosave %>/fonts/'
			}
		},
		ttf2woff: {
			default: {
				src: 'src/fonts/*.ttf',
				dest: '<%= globalConfig.gosave %>/fonts/'
			}
		},
		ttf2woff2: {
			default: {
				src: 'src/fonts/*.ttf',
				dest: '<%= globalConfig.gosave %>/fonts/'
			}
		},
		copy: {
			favicons: {
				expand: true,
				cwd: 'src/favicons',
				src: [
					'**'
				],
				dest: __dirname + "/site/",
			},
			fonts: {
				expand: true,
				cwd: 'src/fonts',
				src: [
					'**'
				],
				dest: '<%= globalConfig.gosave %>/fonts/',
			},
			js: {
				expand: true,
				cwd: 'test/js',
				src: [
					'**'
				],
				dest: '<%= globalConfig.gosave %>/js/',
			},
			form: {
				expand: true,
				cwd: 'src/json',
				src: [
					'**'
				],
				dest: __dirname + "/site/comon/json/",
			},
			images: {
				expand: true,
				cwd: 'src/images',
				src: [
					'*.gif'
				],
				dest: '<%= globalConfig.gosave %>/images/',
			},
		},
		pug: {
			serv: {
				options: {
					doctype: 'transitional',
					client: false,
					pretty: "",
					separator:  "",
					data: function(dest, src) {
						return {
							"base": "[(site_url)]",
							"tem_path" : "/assets/templates/projectsoft",
							"img_path" : "assets/templates/projectsoft/images/",
							"site_name": "[(site_name)]",
							"hash": versions + update,
						}
					}
				},
				files: [
					{
						expand: true,
						cwd: __dirname + '/src/pug/',
						src: [ '*.pug' ],
						dest: __dirname + '/' + '<%= globalConfig.gosave %>/',
						ext: '.html'
					},
				]
			},
			tpl: {
				options: {
					doctype: 'transitional',
					client: false,
					pretty: "",
					separator:  "",
					data: function(dest, src) {
						return {
							"base": "[(site_url)]",
							"tem_path" : "/assets/templates/projectsoft",
							"img_path" : "assets/templates/projectsoft/images/",
							"site_name": "[(site_name)]",
							"hash": versions + update,
						}
					}
				},
				files: [
					{
						expand: true,
						dest: __dirname + '/<%= globalConfig.gosave %>/tpl/',
						cwd:  __dirname + '/src/pug/tpl/',
						src: '*.pug',
						ext: '.html'
					}
				]
			},
			sitemap: {
				options: {
					doctype: 'xml',
					client: false,
					pretty: '\t',
					separator:  '\n',
					data: function(dest, src) {
						return {
							"base": "[(site_url)]",
							"tem_path" : "/assets/templates/projectsoft",
							"img_path" : "assets/templates/projectsoft/images/",
							"site_name": "[(site_name)]",
							"hash": versions + update,
						}
					}
				},
				files: [
					{
						expand: true,
						dest: __dirname + '/<%= globalConfig.gosave %>/sitemap/',
						cwd:  __dirname + '/src/pug/sitemap/',
						src: 'sitemap.pug',
						ext: '.html'
					}
				]
			},
			stylesheet: {
				options: {
					doctype: 'XML',
					client: false,
					pretty: '\t',
					separator:  '\n',
					data: function(dest, src) {
						return {
							"base": "[(site_url)]",
							"tem_path" : "/assets/templates/projectsoft",
							"img_path" : "assets/templates/projectsoft/images/",
							"site_name": "[(site_name)]",
							"hash": versions + update,
						}
					}
				},
				files: [
					{
						expand: true,
						dest: __dirname + '/<%= globalConfig.gosave %>/sitemap/',
						cwd:  __dirname + '/src/pug/sitemap/',
						src: 'stylesheet.pug',
						ext: '.html'
					}
				]
			},
		},
		ftp_upload: {
			default: {
				auth: {
					host: "malyshok.minobr63.ru",
					port: 21,
					authKey: 'bmalysh',
					authPath: '.ftppass'
				},
				src: 'site/assets/templates/projectsoft',
				dest: 'assets/templates/projectsoft',
			}
		},
	});
	grunt.registerTask('default',	gc.default);
	grunt.registerTask('speed',	gc.speed);
};
