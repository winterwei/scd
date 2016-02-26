/*!
 * main.js
 */

(function () {
	var current = window.location.href;
	current = current.replace(/http:\/\//, "");
	current = current.split('/');
	current = current[1];
	current = current.replace(/work-landing/, 'work');
	console.log(current);
	$('.sc-header__navigation__link').each(function () {
		var $this = $(this);
		var href = $this.attr('href');
		href = href.replace(/\//,'');
		href = href.replace(/work-landing/, 'work');
		console.log(href);
		if (current === href) {
			$this.addClass('is-checked');
		}
	});

})();