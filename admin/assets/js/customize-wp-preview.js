jQuery.noConflict();
jQuery(document).ready(function ($) {
	
	jQuery('#preview_login_image_button').click(function() {
	 	tb_show('Customize WP-Login Preview', '<?php echo wp_login_url();?>TB_iframe=true');
	 	return false;
	});
        }); 

