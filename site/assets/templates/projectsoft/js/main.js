!(function($){
	// Default fancybox options
	$.fancybox.defaults.parentEl = ".fancybox__wrapper";
	$.fancybox.defaults.transitionEffect = "circular";
	$.fancybox.defaults.transitionDuration = 500;
	$.fancybox.defaults.lang = "ru";
	$.fancybox.defaults.i18n.ru = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		ERROR: "Запрошенный контент не может быть загружен.<br/>Повторите попытку позже.",
		PLAY_START: "Начать слайдшоу",
		PLAY_STOP: "Остановить слайдшоу",
		FULL_SCREEN: "Полный экран",
		THUMBS: "Миниатюры",
		DOWNLOAD: "Скачать",
		SHARE: "Поделиться",
		ZOOM: "Увеличить"
	};
	/**
	 * Проверка подключения BVI
	 */
	if(typeof isvek == 'object'){
		/**
		 * BVI
		 */
		new isvek.Bvi({
			target: '.eya-panel',
			builtElements: !0,
			images: !0,
			lang: 'ru-RU',
			panelFixed: !0,
			speech: !1,
			fontSize: 16
		});
	}
	/**
	 * Slick
	 */
	$('#slick-header').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true
	});
	/**
	 ** Phone mask
	**/
	$('input[name="phone"]').inputmask({"mask": "+7(999)999-99-99"});
	/**
	 ** End Phone mask
	 **/
	$(document)
		.on('click', '[data-menu-href]', function(e){
			e.preventDefault();
			let _this = $(e.target),
				url = _this.data('menu-href');
			window.location.href = url;
			return !1;
		})
		/**
		 * Кнопка меню
		 **/
		.on('click', function(e){
			$('[role="navigation"]').removeClass('open-menu');
			$('button i').removeClass('icon-menu-close').addClass('icon-menu-open')
		})
		.on('click', '[role="navigation"] button', function(e){
			e.preventDefault();
			let _this = $(e.target),
				_i = $('i', _this),
				parent = _this.parent('[role="navigation"]');
			parent.hasClass('open-menu') ? (
				parent.removeClass('open-menu'),
				_i.removeClass('icon-menu-close').addClass('icon-menu-open')
			) : (
				parent.addClass('open-menu'),
				_i.addClass('icon-menu-close').removeClass('icon-menu-open')
			);
			return !1;
		})
		/**
		 * Просмотр документов
		 **/
		.on("click", "a[href$='.pdf'], a[href$='.docx'], a[href$='.xlsx']", function(e){
			var base = window.location.origin + '/',
				reg = new RegExp("^" + base),
				href = this.href,
				test = this.href,
				go = false,
				arr = href.split('.'),
				ext = arr.at(-1).toLowerCase(),
				options = {};
/*
			console.log(ext);
			console.log(href);
			console.log(base);
			console.log(reg);
*/
			if(reg.test(href)){
/*
				console.log("Test");
*/
				$(this).data('google', go);
				$(this).data('options', options);
				switch (ext){
					case "pdf":
						href = href.replace(base, '');
						go = window.location.origin + '/viewer/pdf_viewer/?file=/' + href;
						options = {
							src: go,
							opts : {
								afterShow : function( instance, current ) {
									$(".fancybox-content").css({
										height: '100% !important',
										overflow: 'hidden'
									}).addClass('pdf_viewer');
								},
								afterLoad : function( instance, current ) {
									$(".fancybox-content").css({
										height: '100% !important',
										overflow: 'hidden'
									}).addClass('pdf_viewer');
								},
								afterClose: function() {
									Cookies.remove('pdfjs.history', { path: '' });
									window.localStorage.removeItem('pdfjs.history');
								}
							}
						};
						e.preventDefault();
						$.fancybox.open(options);
						return !1;
						break;
					case "xlsx":
						go = window.location.origin + '/viewer/xlsx_viewer/?file=' + test;
						options = {
							src: go,
							type: 'iframe',
							opts : {
								afterShow : function( instance, current ) {
									$(".fancybox-content").css({
										height: '100% !important',
										overflow: 'hidden'
									}).addClass('xlsx_viewer');
								},
								afterLoad : function( instance, current ) {
									$(".fancybox-content").css({
										height: '100% !important',
										overflow: 'hidden'
									}).addClass('xlsx_viewer');
								},
							}
						};
						e.preventDefault();
						$.fancybox.open(options);
						return !1;
						break;
					case "docx":
						go = window.location.origin + '/viewer/docx_viewer/?file=' + test;
						options = {
							src: go,
							type: 'iframe',
							opts : {
								afterShow : function( instance, current ) {
									$(".fancybox-content").css({
										height: '100% !important',
										overflow: 'hidden'
									}).addClass('docx_viewer');
								},
								afterLoad : function( instance, current ) {
									$(".fancybox-content").css({
										height: '100% !important',
										overflow: 'hidden'
									}).addClass('docx_viewer');
								},
							}
						};
						e.preventDefault();
						$.fancybox.open(options);
						return !1;
						break;
				}
			}else {
				//console.log("NO Test");
				e.preventDefault();
				window.open(href);
				return !1;
			}
	})
	/** 
	 * Изображения  на сервере
	 **/
	.on("click", "a[href$='.jpg'], a[href$='.jpeg'], a[href$='.png'], a[href$='.gif']", function(e){
		var base = window.location.origin,
			reg = new RegExp("^" + base),
			href = this.href,
			$this = $(this);
		if(reg.test(href)){
			if(!$this.hasClass("fancybox")){
				if(typeof $this.data("fancybox") !== "string") {
					e.preventDefault();
					$.fancybox.open({
						src: href
					});
					return !1;
				}
			}
		}
	})
	/**
	 * Форма обратной связи
	 **/
	.on("click", '*[data-trigger="sendbot"]', function(e){
		e.preventDefault();
		let $this = $(e.target),
			$data = $('[data-id="' + $this.data('trigger') + '"]');
		if($data.length){
			/**/
			$.fancybox.open($data, {
				modal: true,
				infobar: false,
				clickOutside: false,
				buttons: [
					"close"
				],
			});
			/**/
		}
		return !1;
	})
	/**
	 * Сабмит форм
	 * Отправляем ajax только не на поиске
	 */
	.on('submit', 'form', function(e){
		let id = $(e.target).data("modal");
		switch(id){
			case "sendbot":
				e.preventDefault();
				const $form = $(e.target).closest('.modal-form'),
					data = new FormData(e.target),
					url = e.target.action,
					method = e.target.method;
				$("body").addClass('screen');
				$.ajax({
					url: url,
					type: method,
					data: data,
					async: true,
					cache: false,
					contentType: false,
					processData: false,
					dataType: 'json'
				}).done(function(a, b, c) {
					if(a.forms) {
						if(a.forms.form) {
							let form = $(a.forms.form),
								modal = $('.modal-form', form);
							$form.html(modal.html());
							$('input[name="phone"]').inputmask({"mask": "+7(999)999-99-99"});
						}
					};
				})
				.fail(function(a, b, c, d) {
					//console.log('fail');
					//console.log(arguments);
				})
				.always(function() {
					$("body").removeClass('screen');
				});
				return !1;
				break;
		}
	})
	/**
	 * Ссылки поделиться
	 */
	.on("mouseover", ".share-icons-menu", function(e){
		$(".share-icons .icons").addClass("open");
	})
	.on("mouseout", ".share-icons-menu", function(e){
		$(".share-icons .icons").removeClass("open");
	})
	.on("click", ".share-icons a[down-link]", function(e){
		e.preventDefault();
		var attr = $(this).attr('down-link'),
			link = window.location.href,
			title = $("h1").text() || $("title").text(),
			description = $("meta[name=description]").attr("content"),
			image = encodeURIComponent($("meta[itemprop=image]").attr("content")),
			str = "",
			$a = null,
			server = null,
			download = null;
		switch (attr) {
			// Скриншот страницы
			case "photo":
				download = 'ScreenShot-' + title.replace(/\s+/g, "-");
				break;
			// Поделиться в фейсбук
			case "facebook":
				server = "http://www.facebook.com/sharer.php?s=100";
				server += "&[url]=" + encodeURIComponent(link);
				server += "&p[images][0]=" + image;
				server += "&p[title]=" + encodeURIComponent(title);
				server += "&p[summary]=" + encodeURIComponent(description);
				break;
			// Поделиться в ОК
			case "ok":
				server = "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview";
				server += "&st.shareUrl=" + encodeURIComponent(link);
				break;
			// Поделиться в ВК
			case "vk":
				server = "https://vk.com/share.php?";
				server += "url=" + encodeURIComponent(link);
				server += "&title=" + encodeURIComponent(title);
				server += "&image=" + image;
				server += "&description=" + encodeURIComponent(description);
				break;
			// Поделиться в Telegram
			case "telegram":
				let ttl = title + "\n\n" + description;
				ttl = ttl.substring(0, 247) + "...";
				server = "https://t.me/share/url?";
				server += "url=" + encodeURIComponent(link);
				server += "&text=" + encodeURIComponent(ttl);
				break;
			// Поделиться в Twitter
			case "twitter":
				//Длина сообщения 255 символов
				description = description.slice(0, 255);
				server = "https://twitter.com/intent/tweet?";
				server += "url=" + encodeURIComponent(link);
				server += "&text=" + encodeURIComponent(description);
				break;
			// Поделиться в Viber
			// Если установлено приложение Viber
			case "viber":
				//Длина сообщения 255 символов
				description = description.slice(0, 255);
				server = "viber://forward?text=" + encodeURIComponent(link + "\n" + description);
				break;
		}
		if(server){
			// Если ссылка есть
			// Открываем новое окно
			window.open(server);
		}else if(download) {
			// Если ссылки нет - скриншот
			// Запрос на скриншот страницы
			let ms = (new Date()).getTime();
			let turl = new URL(link);
			let sm = turl.search == "" ? `?time=${ms}` : `&time=${ms}`;
			$("body").addClass('screen');
			var laad_screen = false,
				jq_xhr = $.ajax({
					url: window.location.origin + '/screenshot/',
					type: 'POST',
					data: 'shot=' + encodeURIComponent(link + sm) + '&title=' + download,
					responseType: 'blob',
					processData: false,
					xhr:function(){
						let xhr = new XMLHttpRequest();
						xhr.responseType= 'blob'
						return xhr;
					},
				}).done(
					function(blob, status, xhr){
						let disposition = JSON.parse(xhr.getResponseHeader('content-disposition').split("filename=")[1]);
						let a = $("<a>click</a>");
						let regex = /((?:ScreenShot-)|(?:-+)+)/gmi;
						a[0].href = URL.createObjectURL(blob);
						a[0].download = $.trim(disposition.fname.replace(regex, " "));
						$("body").append(a);
						a[0].click();
						$("body").removeClass('screen');
						setTimeout(function(){
							URL.revokeObjectURL(a[0].href);
							a.remove();
						}, 500);
					}
				).fail(
					function(){
						console.log(arguments);
						$("body").removeClass('screen');
						setTimeout(function(){
							alert("Не удалось обработать операцию");
						}, 500);
					}
				).always(
					function(data){
						$("body").removeClass('screen');
					}
				);
			return !1;
		}
	});


	/**
	** New Year
	**/
	(function(){
		var date = new Date(),
			day = date.getDate(),
			month = date.getMonth() + 1;
		/**
		 * new_year prazdnik                01
		 * defender_day prazdnik            23
		 
			https://media.tenor.com/xiJZlZtHNrUAAAAM/field-of.gif
			assets/images/background/0010-bg.jpg
		 *
		 **/
		// Новый год 15.12 - 15.01
		if((day > 15 && month == 12) || (day < 15 && month == 1)) {
			$("body").addClass('feast feast_year');
		}
		// Двадцать третье февраля 18.02 - 27.01
		if((day > 15 && month == 2) || (day < 27 && month == 2)) {
			//$("body").addClass('feast feast_man');
		}
		// Восьмое марта 4.03 - 11.03
		if((day > 4 && month == 3) || (day < 11 && month == 3)) {
			//$("body").addClass('feast feast_woman');
		}
		// День космонавтики 08.04 - 16.04
		if((day > 8 && month == 4) || (day < 16 && month == 4)) {
			//$("body").addClass('feast feast_space');
		}
		// Девятое мая 01.05 - 14.05
		if((day > 1 && month == 5) || (day < 14 && month == 5)) {
			//$("body").addClass('feast feast_victory');
		}
	})();
}(jQuery));
/**
 * 
 * https://partner.market.yandex.ru/business-accept-invite?digest=7fa59b120675efacc5b3293581aeda&bId=80522589&bName=%D0%9E%D0%9E%D0%9E%20%22%D0%A1%D0%9A%D0%90%D0%A2%22%20%D0%A1%D0%BF%D0%B5%D1%86%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0%20%D0%B8%20%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82
 * https://partner.market.yandex.ru/business-accept-invite?digest=36053d01464b24cf63833916ee80c655&bId=80522589&bName=%D0%9E%D0%9E%D0%9E%20%22%D0%A1%D0%9A%D0%90%D0%A2%22%20%D0%A1%D0%BF%D0%B5%D1%86%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0%20%D0%B8%20%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82
 * 
 */