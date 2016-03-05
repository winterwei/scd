/*!
 * work-individual.js
 */

(function () {
	$('.back').on('click', function () {
		window.location.href='/work/#filter=*';
	});
	$('.view-more').on('click', function() {
		$('.sc-work-modal a:first').click();
	});
	var current = window.location.href;
	current = current.replace(/http:\/\//, "");
	current = current.split('/');
	var name = current[2];
	lightbox.option({
		'resizeDuration': 200,
		'albumLabel': name + ': image %1 / %2',
		'disableScrolling': true,
		'positionFromTop': 50,
		'maxHeight': 800,
		'maxWidth': 1000
    });
})();