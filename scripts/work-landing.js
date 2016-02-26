/*!
 * work-landing.js
 */

(function () {
	$('.link-to-work').on('click', function (e) {
		e.preventDefault();
		var idName = $(this).html();
		window.location.href = '/work#filter=.' + idName;
		console.log(window.location.href);
	});
})();