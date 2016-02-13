$(document).ready(function(){
	$('.linha-titulo-hidden').hide();
	$('.link-thumb').mouseenter(projectLinkEnter);
	$('.link-thumb').mouseleave(projectLinkLeave);

	function projectLinkEnter(){
		$(this).find('.linha-titulo').hide();
		$(this).find('.linha-titulo-hidden').slideDown(300);
	}

	function projectLinkLeave(){
		$(this).find('.linha-titulo-hidden').slideUp(300);
		$(this).find('.linha-titulo').show()
	}
});