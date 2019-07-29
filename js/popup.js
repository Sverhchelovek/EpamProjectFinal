let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.btn__close');
let contactButtons  = document.querySelectorAll('.contact__button');





	for (let contactButton of contactButtons) {
		contactButton.addEventListener('click', function(){
	popup.classList.add('popup--active');
});

popupClose.addEventListener('click', function(){
	popup.classList.remove('popup--active');
});
			}
