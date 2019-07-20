jQuery( document ).ready( function( $ ) {

	$('#news-editorial-button').click(function(e) {
		if ( $("#panel-1").hasClass("visible") ) {
			$("#panel-1").removeClass("visible");
			$("#panel-1").addClass("hidden");
			$("#panel-2").removeClass("hidden");
			$("#panel-2").addClass("visible");
		} else if ( $("#panel-2").hasClass("visible") ) {
			$("#panel-2").removeClass("visible");
			$("#panel-2").addClass("hidden");
			$("#panel-1").removeClass("hidden");
			$("#panel-1").addClass("visible");
		}
		e.preventDefault();
	} );
	
	$('.editorial-more-button').click(function(e) {
		if ( $(".overflow-content").hasClass("visible") ) {
			$(".overflow-content").removeClass("visible");
			$(".overflow-content").addClass("hidden");
			$('.editorial-more-button').text('View More')
		} else if ( $(".overflow-content").hasClass("hidden") ) {
			$(".overflow-content").removeClass("hidden");
			$(".overflow-content").addClass("visible");
			$('.editorial-more-button').text('View Less');
		}
		e.preventDefault();
	} );

	$('#parking-details-link').click(function(e) {
		if ( $('#parking-details-text').hasClass('zero-height') ) {
			$('#parking-details-text').removeClass('zero-height');
			$('#parking-details-text').css('padding-bottom', '20px');
		} else {
			$('#parking-details-text').addClass('zero-height');
			$('#parking-details-text').css('padding-bottom', '0');
		}
		e.preventDefault();
	} );

	$('.read-more-link').click(function(e) {
		if ( $('.read-more-text').hasClass('zero-height') ) {
			$('.read-more-text').removeClass('zero-height');
			$('.read-more-text').css('padding-bottom', '20px');
		} else {
			$('.read-more-text').addClass('zero-height');
			$('.read-more-text').css('padding-bottom', '0');
		}
		e.preventDefault();
	} );

	$('.careers-lower-mainland-btn').click(function(e) {
		if ($('.careers-lower-mainland-jobs').hasClass('hidden')) {
			$('.careers-lower-mainland-jobs').removeClass('hidden').addClass('visible');
			$('.careers-vancouver-island-jobs').removeClass('visible').addClass('hidden');
			$('.careers-bc-interior-jobs').removeClass('visible').addClass('hidden');
			$('.careers-corporate-jobs').removeClass('visible').addClass('hidden');
		}

		if (!$('.careers-lower-mainland-btn').hasClass('active')) {
			$('.careers-lower-mainland-btn').addClass('active');
			$('.careers-vancouver-island-btn').removeClass('active');
			$('.careers-bc-interior-btn').removeClass('active');
			$('.careers-corporate-btn').removeClass('active');
		}

		e.preventDefault();
	});

	$('.careers-vancouver-island-btn').click(function(e) {
		if ($('.careers-vancouver-island-jobs').hasClass('hidden')) {
			$('.careers-vancouver-island-jobs').removeClass('hidden').addClass('visible');
			$('.careers-lower-mainland-jobs').removeClass('visible').addClass('hidden');
			$('.careers-bc-interior-jobs').removeClass('visible').addClass('hidden');
			$('.careers-corporate-jobs').removeClass('visible').addClass('hidden');
		}

		if (!$('.careers-vancouver-island-btn').hasClass('active')) {
			$('.careers-vancouver-island-btn').addClass('active');
			$('.careers-lower-mainland-btn').removeClass('active');
			$('.careers-bc-interior-btn').removeClass('active');
			$('.careers-corporate-btn').removeClass('active');
		}

		e.preventDefault();
	});

	$('.careers-bc-interior-btn').click(function(e) {
		if ($('.careers-bc-interior-jobs').hasClass('hidden')) {
			$('.careers-bc-interior-jobs').removeClass('hidden').addClass('visible');
			$('.careers-lower-mainland-jobs').removeClass('visible').addClass('hidden');
			$('.careers-vancouver-island-jobs').removeClass('visible').addClass('hidden');
			$('.careers-corporate-jobs').removeClass('visible').addClass('hidden');
		}

		if (!$('.careers-bc-interior-btn').hasClass('active')) {
			$('.careers-bc-interior-btn').addClass('active');
			$('.careers-vancouver-island-btn').removeClass('active');
			$('.careers-lower-mainland-btn').removeClass('active');
			$('.careers-corporate-btn').removeClass('active');
		}

		e.preventDefault();
	});

	$('.careers-corporate-btn').click(function(e) {
		if ($('.careers-corporate-jobs').hasClass('hidden')) {
			$('.careers-corporate-jobs').removeClass('hidden').addClass('visible');
			$('.careers-lower-mainland-jobs').removeClass('visible').addClass('hidden');
			$('.careers-bc-interior-jobs').removeClass('visible').addClass('hidden');
			$('.careers-vancouver-island-jobs').removeClass('visible').addClass('hidden');
		}

		if (!$('.careers-corporate-btn').hasClass('active')) {
			$('.careers-corporate-btn').addClass('active');
			$('.careers-vancouver-island-btn').removeClass('active');
			$('.careers-lower-mainland-btn').removeClass('active');
			$('.careers-bc-interior-btn').removeClass('active');
		}

		e.preventDefault();
	});

	$('#gform_submit_button_7').on('click', function(e) {
		if ($('#choice_7_5_1').is(':checked')) {
			$('#gform_7').submit();
		} else {
			if ($('#label_7_5_1').hasClass('warning-text')) {
				$('#gform_7').submit();
			} else {
				$('#label_7_5_1').addClass('warning-text');
				$('#gform_wrapper_7 input[type=checkbox]').addClass('warning-text');
				$('#label_7_5_1').text("Don't miss out on future offers! You can unsubscribe anytime.");
				return false;
			}
		}
	});

$(".et_pb_video_overlay").click(function() {
	var iframe = $(this).prev(".et_pb_video_box").find("iframe"),
	iframe_src = $(iframe).attr("src");
	$(iframe).attr("src", iframe_src + "&autoplay=1&rel=0"); //****Added youTube rel=0 argument to hide related videos after video finishesplaying ****//

	$(this).css("display","none"); //****This hides the overlay ****//
	// $(".et_pb_carousel_item").click(function(){
	// 	$(iframe).attr("src", iframe_src + "&autoplay=0&rel=0");
	// });
});

// Better Hearing Expo disable buttons
$('.bhe-selections-button').on('click', function(e) {
	$selected_button = $(this);
	$selection_checkbox = $selected_button.closest('.et_pb_button_module_wrapper').siblings('.bhe-selections-checkbox-container').find('.bhe-selections-checkbox');

	if ($selected_button.hasClass('bhe-selections-selected')) {
		return;
	} else {
		e.preventDefault();
		if (! $selection_checkbox.hasClass('bhe-selections-checkbox-warning') ) {
			$selection_checkbox.toggleClass('bhe-selections-checkbox-warning');
			$('<p class="bhe-selections-checkbox-warning-text">Please select your location to register</p>').insertBefore($selection_checkbox.closest('.bhe-selections-checkbox-container'));
		}
	}	
});

// Better Hearing Expo Checkbox functionality
// If checkbox is selected remove all other selections
// Add selected classes to current selection for checkbox and button
$('.bhe-selections-checkbox').click(function() {
	var $checkbox = $(this);
	var $selections_button = $checkbox.closest('.et_pb_text').siblings('.et_pb_button_module_wrapper').children('.bhe-selections-button');

	if ($checkbox.hasClass('bhe-selections-selected')) {		
		$checkbox.toggleClass('bhe-selections-selected');
		$selections_button.toggleClass('bhe-selections-selected');		
	} else {
		$('.bhe-selections-checkbox').removeClass('bhe-selections-selected');
		$('.bhe-selections-button').removeClass('bhe-selections-selected');
		$checkbox.toggleClass('bhe-selections-selected');
		$selections_button.toggleClass('bhe-selections-selected');
		$selections_button.on();

		if ($checkbox.hasClass('bhe-selections-checkbox-warning')) {
			$checkbox.toggleClass('bhe-selections-checkbox-warning');
			$('.bhe-selections-checkbox-warning-text').remove();
		}
	}
});

// Modify text on Job Posting gravity form
$('#gform_15 #input_15_3').prop('disabled', 'disabled');
$('#gform_15 .ginput_container_fileupload .gform_drop_instructions').text('*Resume and Cover Letter (doc, docx or PDF)');
$('#gform_15 .ginput_container_fileupload .gform_button_select_files').prop('value', 'browse your computer').after('<i class="fa fa-copy"></i>');
$('#gform_15 #input_15_1').prop('placeholder', '*Name');
$('#gform_15 #input_15_2').prop('placeholder', '*Email');
$('#gform_15 #gform_submit_button_15').prop('value', 'Submit Resume');

// Support Page Buttons Functionality
$('#support-bte-btn').click(function() {
	if(! $('#support-bte-btn').hasClass('active')) {
		$('#support-bte-btn').addClass('active');
		$('#support-custom-btn').removeClass('active');
	}

	if($('#support-custom-section').hasClass('visible')) {
		$('#support-custom-section').removeClass('visible');
		$('#support-bte-section').addClass('visible');
	}
});

$('#support-custom-btn').click(function() {
	if(! $('#support-custom-btn').hasClass('active')) {
		$('#support-custom-btn').addClass('active');
		$('#support-bte-btn').removeClass('active');
	}

	if($('#support-bte-section').hasClass('visible')) {
		$('#support-bte-section').removeClass('visible');
		$('#support-custom-section').addClass('visible');
	}
});

/**
 * Modify GoGreen form to include text for required fields
 */

$('.gogreen-form-container .gfield_required').html('* required field');


} );

jQuery('[id^=pum-]')
	.on('pumBeforeOpen', function () {
		var $iframe = jQuery('iframe', jQuery(this)),
			src = $iframe.prop('src');
		$iframe.prop('src', '').prop('src', src + '&autoplay=1');
	});

function init() {
	var vidDefer = document.getElementsByTagName('iframe');
		for (var i=0; i<vidDefer.length; i++) {
			if(vidDefer[i].getAttribute('data-src')) {
				vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
		}
	}
}
window.onload = init;