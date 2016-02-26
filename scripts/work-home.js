/*!
 * work-home.js
 */
function getHashFilter() {
  var hash = location.hash;
  // get filter=filterName
  var matches = location.hash.match( /filter=([^&]+)/i );
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent( hashFilter );
}

(function () {
	var $grid = $('.grid');
	$('#all').addClass('is-checked');
	var $filterButtonGroup = $('.sc-work__tabgroup');
	  $filterButtonGroup.on( 'click', 'button', function() {
	    var filterAttr = $( this ).attr('data-filter');
	    // set filter in hash
	    location.hash = 'filter=' + encodeURIComponent( filterAttr );
	  });
	var isIsotopeInit = false;
	function onHashchange() {
    	var hashFilter = getHashFilter();
    	if ( !hashFilter && isIsotopeInit ) {
    	      return;
    	}
    	isIsotopeInit = true;
    	$grid.isotope ({
    		itemSelector: '.grid-item',
    		layoutMode: 'masonry',
    		percentPosition: true,
    		masonry: {
    			columnWidth: '.grid-sizer'
    		},
    		filter: hashFilter
    	});
    	if ( hashFilter ) {
    	      $filterButtonGroup.find('.is-checked').removeClass('is-checked');
    	      $filterButtonGroup.find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
    	}

	}

	$(window).on( 'hashchange', onHashchange );

	// trigger event handler to init Isotope
	onHashchange();

	$grid.imagesLoaded().progress( function () {
		$grid.isotope('layout');
	});


	//more work button from landing page(gallery section)
	$('.sc-morework-button').on('click', function () {
		window.location.href='/work';
	});
})();