$(document).ready(function(){
	$('#container').hide();

	$(window).load(function(){
		$('.load-container').slideUp(function(){
			$('.load-container').hide();
			$('#container').fadeIn(2000);
		});
	});
});