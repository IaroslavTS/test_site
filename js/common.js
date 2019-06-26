(function () {

/** Slider modul
 * */
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

})();

/** Smooth navigation
 * */
 $(document).ready(function(){
    $(".header-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
})

/**Interactive scale
 *  */
$(window).scroll(function() {
	let windowScroll = $(document).scrollTop();
	let trgAboutScroll = $('#trgAbout').offset().top - 10;

	if(windowScroll > trgAboutScroll) {
		scaleAnimation();
	}
});

/**Scale animation
 *  */
function scaleAnimation() {
	for (let i = 0; i < 4; i++) {
		$(`.scale:eq(${i}) div`).delay(`${i+1}000`).animate({
			width: $(`.data-info:eq(${i}) span`).html()}, 3000);
	}
};	

/** */
// $('.block-info').hover(function(){
// 	$(this).find('.block-info-hover').addClass('active');
// 	$(this).find('.active').animate({
// 		width: '150px' ,
// 		backgroundColor: "rgb(255, 125,125)"
// 	},1500);

// },function(){

// 	$(this).find('.block-info-hover').removeClass('active');
// });
