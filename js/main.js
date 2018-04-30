// $( () => {
	
// 	//On Scroll Functionality
// 	$(window).scroll( () => {
// 		var windowTop = $(window).scrollTop();
// 		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
// 		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
// 	});
	
// 	//Click Logo To Scroll To Top
// 	$('#logo').on('click', () => {
// 		$('html,body').animate({
// 			scrollTop: 0
// 		},500);
// 	});
	
// 	//Smooth Scrolling Using Navigation Menu
// 	$('a[href*="#"]').on('click', function(e){
// 		$('html,body').animate({
// 			scrollTop: $($(this).attr('href')).offset().top - 100
// 		},500);
// 		e.preventDefault();
// 	});
	
// 	//Toggle Menu
// 	$('#menu-toggle').on('click', () => {
// 		$('#menu-toggle').toggleClass('closeMenu');
// 		$('ul').toggleClass('showMenu');
		
// 		$('li').on('click', () => {
// 			$('ul').removeClass('showMenu');
// 			$('#menu-toggle').removeClass('closeMenu');
// 		});
// 	});
	
// });

$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		margin: 300,
		nav: true,
		smartSpeed: 700,
		dragEndSpeed: 700,
		navSpeed: 700,
		navText: ["<div class='btn-prev flex effect-shine'><img src='images/arrow.svg' alt=''>Предыдущая</div>", "<div class='btn-next flex effect-shine'>Следующая<img src='images/arrow.svg' alt=''></div>"]
	});
});