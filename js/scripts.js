$(() => {
	// Основной слайдер на главной
	$('.main_banner .slider').owlCarousel({
		items: 1,
		margin: 20,
		loop: true,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,
		responsive: {
			0: {
				nav: false,
				dots: true
			},
			480: {
				nav: true,
				dots: false
			}
		},
		onTranslate: event => {
			$(event.target).trigger('stop.owl.autoplay')
		},
		onTranslated: event => {
			$(event.target).trigger('play.owl.autoplay', [4250, 0])
		}
	})


	// Сертификаты
	$('.certs .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 500,
		margin: 1,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	})


	// Боковая колонка
	$('aside .cats .title').click(function (e) {
		e.preventDefault()

		$(this).hasClass('active')
			? $(this).removeClass('active').next().slideUp(300)
			: $(this).addClass('active').next().slideDown(300)
	})


	$('aside .cats a.sub_link').click(function (e) {
		e.preventDefault()

		let cats = $(this).parent('div').parent('div')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next().slideUp(300)
		} else {
			cats.find('.sub_link').removeClass('active')
			cats.find('.sub_cats').slideUp(300)

			$(this).addClass('active').next().slideDown(300)
		}
	})


	// Страница товара
	$('.product_info .order_btn').click(function (e) {
		e.preventDefault()

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.product_info .order_form').slideUp(300)
		} else {
			$(this).addClass('active')
			$('.product_info .order_form').slideDown(300)
		}
	})


	// Аккордион
	$('.accordion .item .head').click(function (e) {
		e.preventDefault()

		const $item = $(this).closest('.item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})

	$('.accordion .item .close').click(function (e) {
		e.preventDefault()

		const $accordion = $(this).closest('.accordion')

		$accordion.find('.item').removeClass('active')
		$accordion.find('.data').slideUp(300)
	})
})



$(window).on('load', () => {
	// Фикс. шапка
	headerInit = true,
		headerHeight = $('header').outerHeight()

	$('header').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	headerInit && $(window).scrollTop() > 0
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



$(window).resize(() => {
	// Фикс. шапка
	headerInit = false
	$('.header_wrap').height('auto')

	setTimeout(() => {
		headerInit = true
		headerHeight = $('header').outerHeight()

		$('.header_wrap').height(headerHeight)

		headerInit && $(window).scrollTop() > 0
			? $('header').addClass('fixed')
			: $('header').removeClass('fixed')
	}, 100)
})



$(window).scroll(() => {
	// Фикс. шапка
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > 0
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})