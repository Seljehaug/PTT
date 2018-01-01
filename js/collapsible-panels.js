$(function(){
	var $panel = $('.collapsible-panels-list .panel');

	$panel.each(function(i){
		var index = i + 1;
		$(this).attr('id', 'panel-' + index);
	});

	$panel.on('click', function(){
		$(this).toggleClass('active');
		$(this).find('.panel-content').toggleClass('is-open');
	});
});
