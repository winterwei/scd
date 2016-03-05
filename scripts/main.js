/*!
 * main.js
 */

(function () {
	var current = window.location.href;
	current = current.replace(/http:\/\//, "");
	current = current.split('/');
	current = current[1];
	current = current.replace(/work-landing/, 'work');
	// console.log(current);
	$('.sc-header__navigation__link').each(function () {
		var $this = $(this);
		var href = $this.attr('href');
		href = href.replace(/\//,'');
		href = href.replace(/work-landing/, 'work');
		// console.log(href);
		if (current === href) {
			$this.addClass('is-checked');
		}
	});
	$('#about').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
	});
	$('#contact').on('click', function (){
		window.location.href='/contact';
	});
	$('#video1').on('click', function (){
		window.open('https://vimeo.com/140318466');
	});
	$('#video2').on('click', function (){
		window.open('http://houseandhome.com/video/small-yet-glamorous-condo/');
	});
	$('#video3').on('click', function (){
		window.open('http://houseandhome.com/video/stacey-cohens-cocktail-lounge/');
	});

})();