var screenW = screen.width;
var screenH = screen.height;
var availH;

if(screenW > screenH){
	availH = screenW;
}else{
	availH = screenH;
}

;(function($){
	window.addEventListener("load",function() {
		  setTimeout(function(){
		    window.scrollTo(0, 0);
		  }, 0);
		});
	
	var opration = $('.opration');
	var bodyH = $('body').height();

	opration
		.find('.container .opration-head .head-content')
		.find('>h1')
		.addClass('fade-in-down')
		.siblings('p')
		.addClass('fade-in')
		.parent()
		.siblings('.head-icon')
		.find('>img')
		.addClass('scale-animate')
		.parents('.opration-head')
		.siblings('.opration-body')
		.find('.body-head .body-head-content')
		.addClass('fade-in-up')
		.find('>h1,>p')
		.addClass('fade-in');
	// console.log($('.product-design').offset().top)
	// console.log($('.abrand-manager').offset().top)
	$(window).scroll(function(e){
		var wTop = $(window).scrollTop();
		var iTop = $('.image-design').offset().top;
		var aTop = $('.abrand-manager').offset().top;
		var inTop = $('.internet-promotion').offset().top;
		var tTop = $('.body-tail').offset().top + availH * 0.08;
		// console.log(tTop)

		if(wTop > (iTop - bodyH) && wTop < (aTop - bodyH)){
			imageAnimate();
		}else if(wTop >= (aTop - bodyH) && wTop < (inTop - bodyH)){
			imageAnimate();
			abrandAnimate();
		}else if(wTop >= (inTop - bodyH) && wTop < (tTop - bodyH)){
			imageAnimate();
			abrandAnimate();
			internetAnimate();
		}else{
			imageAnimate();
			abrandAnimate();
			internetAnimate();
			tailAnimate();
		}

		function imageAnimate(){
			opration
				.find('.container .opration-body .body-content')
				.find('.image-design .module-icon >img')
				.addClass('scale-animate')
				.parent()
				.siblings('.module-content')
				.addClass('fade-in-down-2')
				.find('>h1')
				.addClass('fade-in')
				.siblings('p')
				.addClass('fade-in-down-3');
		}

		function abrandAnimate(){
			opration
				.find('.container .opration-body .body-content')
				.find('.abrand-manager .module-icon >img')
				.addClass('scale-animate')
				.parent()
				.siblings('.module-content')
				.addClass('fade-in-down-2')
				.find('>h1')
				.addClass('fade-in')
				.siblings('p')
				.addClass('fade-in-down-3');
		}

		function internetAnimate(){
			opration
				.find('.container .opration-body .body-content')
				.find('.internet-promotion .module-icon >img')
				.addClass('scale-animate')
				.parent()
				.siblings('.module-content')
				.addClass('fade-in-down-2')
				.find('>h1')
				.addClass('fade-in')
				.siblings('p')
				.addClass('fade-in-down-3');
		}

		function tailAnimate(){
			opration
				.find('.container .opration-body .body-tail .tail-content')
				.addClass('fade-in-down-2')
				.find('>h1')
				.addClass('fade-in')
				.siblings('p')
				.addClass('fade-in-down-3');
		}
		

	})
})(jQuery);