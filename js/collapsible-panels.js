$(function(){
	var $panel = $('.collapsible-panels-list .panel');

	$panel.each(function(i){
		var index = i + 1;
		$(this).attr('id', 'panel-' + index);
	});

	$panel.on('click', function(){
		$panel.removeClass('mobile-hover-fix');

		$(this).toggleClass('active');
		$(this).find('.panel-content').toggleClass('is-open');

		// Remove the hover effect on mobile when clicking on a panel that was active
		// The hover state on mobile would not be removed until clicking elsewhere
		if(! $(this).hasClass('active') ){
			$(this).toggleClass('mobile-hover-fix');
		}
	});
});
