$(function(){
	// If you want the page to not be able to scroll when menu is active,
	// comment out the two lines where overflow is changed for body,html

	// Mobile menu
	var menu = $('#menu-mobile');
	var toggle = $('.toggle-menu');

	toggle.on('click', function(){
		if(menu.hasClass('active')){
			var w_width = $(window).width();

			menu.removeClass('active');
			// $('body, html').css('overflow', 'auto');
			$('.toggle-menu .menu-icon').css('background-image', 'url("img/icons/menu-black.svg")');
			if(w_width > 500){
				toggle.css({'left': '-27%', 'transition': 'left 0.15s ease-in-out'});
			}else{
				toggle.css({'left': '-22%', 'transition': 'left 0.15s ease-in-out'});
			}

		}else{
			menu.addClass('active');
			// $('body, html').css('overflow', 'hidden');
			$('.toggle-menu .menu-icon').css('background-image', 'url("img/icons/close-white.svg")');
			toggle.css({'left': '1rem', 'transition': 'left 0.15s ease-in-out'});
		}
	});

	// Active state in menu
	var loc = window.location.href; // returns the full URL
	var url_parts = loc.split('/');
	var current_page = url_parts.pop() || url_parts.pop(); // handle potential trailing slash
	var selector = '#menu-normal a[href*="' + current_page + '"]';

	$(selector).addClass('active');
	$('#menu-mobile a[href*="' + current_page + '"]').addClass('active');
});

// Fix the correct left margin for the menu icon (when not active)
$(window).resize(function() {
	if(! $('#menu-mobile').hasClass('active') ){
		var toggle = $('.toggle-menu');
		var w_width = $(window).width();
		if(w_width > 500){
			toggle.css({'left': '-27%', 'transition': 'left 0.15s ease-in-out'});
		}else{
			toggle.css({'left': '-22%', 'transition': 'left 0.15s ease-in-out'});
		}
	}
});
