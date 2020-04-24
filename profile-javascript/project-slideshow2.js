var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
	showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
	showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides2");
	var dots = document.getElementsByClassName("dot2");
	if (n > slides.length) {slideIndex2 = 1}
	if (n < 1) {slideIndex2 = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active","");
	}
	slides[slideIndex2-1].style.display = "block";
	dots[slideIndex2-1].className += " active";
}

setInterval(function () {
	plusSlides2(1);
}, 5000);