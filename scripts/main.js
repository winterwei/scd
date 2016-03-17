
(function () {
	var current = window.location.href;
	current = current.replace(/http:\/\//, "");
	current = current.split('/');
	current = current[1];
	current = current.replace(/work-landing/, 'work');
	$('.sc-header__navigation__link').each(function () {
		var $this = $(this);
		var href = $this.attr('href');
		href = href.replace(/\//,'');
		href = href.replace(/work-landing/, 'work');
		if (current === href) {
			$this.addClass('is-checked');
		}
	});
	$('#about').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
	});
	$('.button-service').on('click', function(e){
		window.location.href='/service';
	});
	$('.button-blog').on('click', function(e){
		window.open('http://blog.staceycohendesign.com/');
	});
	$('.button-news').on('click', function(e){
		window.location.href='/press';
	});
	$('#contact').on('click', function (){
		window.location.href='/contact';
	});
	$('#video1').on('click', function (){
		window.open('https://vimeo.com/140318466');
	});
	$('#video3').on('click', function (){
		window.open('http://houseandhome.com/video/small-yet-glamorous-condo/');
	});
	$('#video2').on('click', function (){
		window.open('http://houseandhome.com/video/stacey-cohens-cocktail-lounge/');
	});

	if ($(window).width() < 1191) {
		$('.sc-header__navigation__mainlist').hide();
		$('.sc-header__menu').on('click', function(){
			var mobileNav = $('.sc-header__navigation__mainlist');
			if (mobileNav.is(':visible')) {
			$('.sc-header__navigation__mainlist').fadeOut(300);;

		} else  {
			$('.sc-header__navigation__mainlist').fadeIn(300);;
		}
		});
	}

})();