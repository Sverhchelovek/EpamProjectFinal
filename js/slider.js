let left = 0;
autoSlider();
let timer;

function autoSlider() {
	timer = setTimeout( sliderLeft, 4000);
}

function sliderLeft() {
	let slider = document.getElementById('sliderPhoto')
	left = left - 100;
	if( left < -400) {
		left = 0;
	}
	slider.style.left = left + '%';
	autoSlider();
}

