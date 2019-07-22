/** Burger tab
 */

 $('.burger-toggle').on('click', 'input', function() {
	if (this.checked) {
		$('.header-menu>ul').animate({top: '70px'},1000);
	} else {
		$('.header-menu>ul').animate({top: '-200px'}, 1000);
	}
 });

//  $(document).on('click', function() {
// 	 console.log($('.burger-toggle input').attr('checked'));
// 		$('.burger-toggle input').attr('checked', 'none');
// 		$('.header-menu>ul').animate({top: '-200px'}, 1000);
//  });

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
		scaleAnimation(false);
	} else {
		scaleAnimation(true);
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



/**  Google maps
 **/

	let map;

/** Map function 
 */
function initMap() {

	map = new google.maps.Map(document.getElementById('map'), {

		center: {lat: 49.844165, lng: 24.026225},
		zoom: 17

		// Добавляем свои стили для отображения карты
		// styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
	});

	var marker = new google.maps.Marker({
	    position: {lat: 49.843321, lng: 24.026648}, 
	    map: map,
	    title: 'Най най найцентральніший фонтан міста Лева',
	    icon: '../img/fontaine.png'
	});

	var contentString = '<div id="content">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading">Центральний фонтан ЛЬвова</h1>'+
	      '<div id="bodyContent">'+
	      '<p>Головний фонтан міста Львова, що знаходиться на центальній площі' +
	      'перед оперним театром. Місце зустрічи багатьох закоханих.</p>'+
	      '</div>'+
	      '</div>';

	var infowindow = new google.maps.InfoWindow({
	   content: contentString,
	   maxWidth: 300
	});

	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}
