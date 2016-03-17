
function getHashFilter() {
  var hash = location.hash;
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

	onHashchange();

	$grid.imagesLoaded().progress( function () {
		$grid.isotope('layout');
	});

	$('.sc-morework-button').on('click', function () {
		window.location.href='/work';
	});
})();