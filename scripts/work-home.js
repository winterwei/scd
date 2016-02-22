/*!
 * main.js
 */

(function () {
	'use strict';
	// init Isotope
	var $grid = $('.grid').isotope ({
		itemSelector: '.grid-item',
		layoutMode: 'masonry',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});
	// layout Isotope after each image loads
	$grid.imagesLoaded().progress( function () {
		$grid.isotope('layout');
	});
	$('.sc-work__tabgroup').on( 'click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$('.grid.sc-work__tablist').isotope ({ filter: filterValue });
	});
})();