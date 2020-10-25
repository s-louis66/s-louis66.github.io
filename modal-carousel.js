/*
Carousel-1
*/
$('#carousel-customDeskHome').on('slide.bs.carousel', function (e) {
/*
CC 2.0 License Iatek LLC 2018 - Attribution required
*/
	var $e = $(e.relatedTarget);
	var idx = $e.index();
	var itemsPerSlide = 5;
	var totalItems = $('.carousel-item1').length;

	if (idx >= totalItems-(itemsPerSlide-1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i=0; i<it; i++) {
			// append slides to end
			if (e.direction=="left") {
				$('.carousel-item1').eq(i).appendTo('.carousel-inner1');
			}
			else {
				$('.carousel-item1').eq(0).appendTo('.carousel-inner1');
			}
		}
	}
});
/*
Carousel-2
*/
$('#carousel-woodworkingExample1').on('slide.bs.carousel', function (e) {
/*
CC 2.0 License Iatek LLC 2018 - Attribution required
*/
	var $e = $(e.relatedTarget);
	var idx = $e.index();
	var itemsPerSlide = 5;
	var totalItems = $('.carousel-item2').length;

	 if (idx >= totalItems-(itemsPerSlide-1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i=0; i<it; i++) {
			// append slides to end
			if (e.direction=="left") {
				$('.carousel-item2').eq(i).appendTo('.carousel-inner2');
			}
			else {
				$('.carousel-item2').eq(0).appendTo('.carousel-inner2');
			}
		}
	}
});
/*
Carousel-3
*/
$('#carousel-woodworkingExample2').on('slide.bs.carousel', function (e) {
/*
CC 2.0 License Iatek LLC 2018 - Attribution required
*/
	var $e = $(e.relatedTarget);
	var idx = $e.index();
	var itemsPerSlide = 5;
	var totalItems = $('.carousel-item3').length;

	 if (idx >= totalItems-(itemsPerSlide-1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i=0; i<it; i++) {
			// append slides to end
			if (e.direction=="left") {
				$('.carousel-item3').eq(i).appendTo('.carousel-inner3');
			}
			else {
				$('.carousel-item3').eq(0).appendTo('.carousel-inner3');
			}
		}
	}
});
/*
Carousel-4
*/
$('#carousel-mainProfilePage').on('slide.bs.carousel', function (e) {
/*
CC 2.0 License Iatek LLC 2018 - Attribution required
*/
	var $e = $(e.relatedTarget);
	var idx = $e.index();
	var itemsPerSlide = 5;
	var totalItems = $('.carousel-item4').length;

	 if (idx >= totalItems-(itemsPerSlide-1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i=0; i<it; i++) {
			// append slides to end
			if (e.direction=="left") {
				$('.carousel-item4').eq(i).appendTo('.carousel-inner4');
			}
			else {
				$('.carousel-item4').eq(0).appendTo('.carousel-inner4');
			}
		}
	}
});
/*
Carousel-5
*/
$('#carousel-solLogo').on('slide.bs.carousel', function (e) {
/*
CC 2.0 License Iatek LLC 2018 - Attribution required
*/
	var $e = $(e.relatedTarget);
	var idx = $e.index();
	var itemsPerSlide = 5;
	var totalItems = $('.carousel-item5').length;

	 if (idx >= totalItems-(itemsPerSlide-1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i=0; i<it; i++) {
			// append slides to end
			if (e.direction=="left") {
				$('.carousel-item5').eq(i).appendTo('.carousel-inner5');
			}
			else {
				$('.carousel-item5').eq(0).appendTo('.carousel-inner5');
			}
		}
	}
});
/*
Carousel-6
*/
$('#carousel-practiceProfilePage1').on('slide.bs.carousel', function (e) {
/*
CC 2.0 License Iatek LLC 2018 - Attribution required
*/
	var $e = $(e.relatedTarget);
	var idx = $e.index();
	var itemsPerSlide = 5;
	var totalItems = $('.carousel-item6').length;

	 if (idx >= totalItems-(itemsPerSlide-1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i=0; i<it; i++) {
			// append slides to end
			if (e.direction=="left") {
				$('.carousel-item6').eq(i).appendTo('.carousel-inner6');
			}
			else {
				$('.carousel-item6').eq(0).appendTo('.carousel-inner6');
			}
		}
	}
});
/*
Carousel-7
*/
$('#carousel-practiceProfilePage2').on('slide.bs.carousel', function (e) {
/*
CC 2.0 License Iatek LLC 2018 - Attribution required
*/
	var $e = $(e.relatedTarget);
	var idx = $e.index();
	var itemsPerSlide = 5;
	var totalItems = $('.carousel-item7').length;

	 if (idx >= totalItems-(itemsPerSlide-1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i=0; i<it; i++) {
			// append slides to end
			if (e.direction=="left") {
				$('.carousel-item7').eq(i).appendTo('.carousel-inner7');
			}
			else {
				$('.carousel-item7').eq(0).appendTo('.carousel-inner7');
			}
		}
	}
});
/*
Carousel-8
*/
$('#carousel-modalGusCabinets').on('slide.bs.carousel', function (e) {
/*
CC 2.0 License Iatek LLC 2018 - Attribution required
*/
	var $e = $(e.relatedTarget);
	var idx = $e.index();
	var itemsPerSlide = 5;
	var totalItems = $('.carousel-item8').length;

	 if (idx >= totalItems-(itemsPerSlide-1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i=0; i<it; i++) {
			// append slides to end
			if (e.direction=="left") {
				$('.carousel-item8').eq(i).appendTo('.carousel-inner8');
			}
			else {
				$('.carousel-item8').eq(0).appendTo('.carousel-inner8');
			}
		}
	}
});