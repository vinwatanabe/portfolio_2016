$(document).ready(function(){
	// THUMB RIGHT MOUSE MOVE
	$(window).mousemove(function(e){
		var x = (e.pageX * 1 / 70);
		var y = (e.pageY * 1 / 70);

		$('.thumb-right').css({'transform':'translate(' + x + 'px, ' + y +'px)'});
		$('.thumb-right').css({'-webkit-transform':'translate(' + x + 'px, ' + y +'px)'});
		$('.thumb-right').css({'-ms-transform':'translate(' + x + 'px, ' + y +'px)'});
	});


	// THUMB LEFT MOUSE MOVE
	$(window).mousemove(function(e){
		var x = (e.pageX * 1 / 70);
		var y = (e.pageY * 1 / 70);

		$('.thumb-left').css({'transform':'translate(' + x + 'px, ' + y +'px)'});
		$('.thumb-left').css({'-webkit-transform':'translate(' + x + 'px, ' + y +'px)'});
		$('.thumb-left').css({'-ms-transform':'translate(' + x + 'px, ' + y +'px)'});
	});

	//TITULO LINK RIGHT MOUSE MOVE
	$(window).mousemove(function(e){
		var x = (e.pageX * -1 / 50);
		var y = (e.pageY * -1 / 50);

		$('.titulo-thumb-right').css({'transform':'translate(' + x + 'px, ' + y +'px)'});
		$('.titulo-thumb-right').css({'-webkit-transform':'translate(' + x + 'px, ' + y +'px)'});
		$('.titulo-thumb-right').css({'-ms-transform':'translate(' + x + 'px, ' + y +'px)'});
	});

	//TITULO LINK LEFT MOUSE MOVE
	$(window).mousemove(function(e){
		var x = (e.pageX * -1 / 50);
		var y = (e.pageY * -1 / 50);

		$('.titulo-thumb-left').css({'transform':'translate(' + x + 'px, ' + y +'px)'});
		$('.titulo-thumb-left').css({'-webkit-transform':'translate(' + x + 'px, ' + y +'px)'});
		$('.titulo-thumb-left').css({'-ms-transform':'translate(' + x + 'px, ' + y +'px)'});
	});
});