var currentPosition = 0;

function validateEmail($email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
	return emailReg.test($email);
}

function validateFormField($obj) {
	"use strict";
	var valid = 1;
	$obj.parent().addClass('field_invalid');
	if (($obj.val() === '') || (($obj.attr('type') == 'email') && (!validateEmail($obj.val())))) {
		valid = 0;
	} else {
		$obj.parent().removeClass('field_invalid');
	}
	return valid;
}

function validateForm($formObj) {
	"use strict";
	var valid = 1;
	$formObj.find(".required").each(function() {
		if (validateFormField($(this).children('input, textarea, select').first()) === 0) {
			valid = 0;
		}
		$(this).children('input, textarea, select').unbind().blur(function() {
			validateFormField($(this));
		});
	});
	if (valid === 1) {
    	 	console.log("VALID: Submit");
		$formObj.attr("action", $formObj.attr("action") + '#' + $formObj.closest('.page').attr('id'));
		$formObj.submit();
	} else {
		 console.log("NOT VALID");
  }
}

$(function() {
	"use strict";

	// Form validation
	$('form.validate').find('input[type=submit]').on('click', function(e) {
		validateForm( $(this).closest('form') );
		return false;
	});

});
