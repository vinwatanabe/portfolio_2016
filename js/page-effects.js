$(document).ready(function(){
	$('.linha-titulo-hidden').hide();
	$('.link-thumb').mouseenter(projectLinkEnter);
	$('.link-thumb').mouseleave(projectLinkLeave);

	//SCROLL TOP
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	function projectLinkEnter(){
		$(this).find('.linha-titulo').hide();
		$(this).find('.linha-titulo-hidden').slideDown(300);
	}

	function projectLinkLeave(){
		$(this).find('.linha-titulo-hidden').slideUp(300);
		$(this).find('.linha-titulo').show()
	}
});