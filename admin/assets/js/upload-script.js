jQuery.noConflict();
jQuery(document).ready(function ($) {
	
	jQuery('#customize-wp-login-upload_image_button').click(function() {
	 	formfield = jQuery('#upload_image').attr('name');
	 	tb_show('', 'media-upload.php?type=image&TB_iframe=true');
	 	return false;
	});
	jQuery('#customize-wp-login-wp_login_bg_logo_image').click(function() {
	 	formfield = jQuery('#upload_image').attr('name');
	 	tb_show('', 'media-upload.php?type=image&TB_iframe=true');
	 	return false;
	}); 
	window.send_to_editor = function(html) {
	 imgurl = jQuery('img',html).attr('src');
	 jQuery('#upload_image').val(imgurl);
	 tb_remove();
	 
	 jQuery('#upload_image_thumb').html("<img height='65' src='"+imgurl+"'/>");
	}
   
}); 