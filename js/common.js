(function () {

//Slider modul
		const slider = (function () {
			const sliderBackG = ['linear-gradient(289deg, #503392, #673ab7 49%, #00bff3)',
					  'linear-gradient(289deg, #eded4e, #673ab7 49%, #00bff3)',
					  'linear-gradient(289deg, #eded4e, #673ab7 49%, #b0f7af)'];
			let i = 0;

			return {
				goLeft: goLeft,
				goRight: goRight,
				toggleBtn: toggleBtn
			}

			function goLeft() {
				i--;
				if (i < 0) {
					i = sliderBackG.length - 1;
				}
				$('.overlay').css('background', sliderBackG[i]);
			}

			function goRight() {
				i++;
				if (i > sliderBackG.length) {
					i = 0;
				}
				$('.overlay').css('background', sliderBackG[i]);
			}

			function toggleBtn(event) {
				console.log(event.currentTarget.value);
				i = event.currentTarget.value;
				$('.overlay').css('background', sliderBackG[i]);
			}

		})();

		$('.arrow-left').on('click', slider.goLeft);

		$('.arrow-right').on('click', slider.goRight);

		$('.slider-toggle').on('click', slider.toggleBtn);

	$('.main-menu').ready(function () {

		//	$('a').hover(function(){
		//		$('li:hover>ul').css('display', 'block'), 200}, function(){ $('li:hover>ul').css('display', 'none'), 200
		//	});
		//	let opac = $('a').css('opacity');
		//	$('a').hover(function(){
		//		$(this).stop().animate({opacity: '1'}, 400)
		//	}, function(){ 
		//		$(this).stop().animate({opacity: opac}, 400)
		//	});
	});

})();

// Smooth navigation
 $(document).ready(function(){
    $(".header-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
})

//Interective scales
//$(window).scroll(function() {
//	let target = $('#trgAbout').offset().top;
//	
////	console.log(target);
//});

function scaleAnimation() {
	let scalePercent = $('.scale div');
	$('.scale div').animate({width: "50%"}, 1500);
	console.log(scalePercent);
}

scaleAnimation();