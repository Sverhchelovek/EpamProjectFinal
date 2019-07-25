let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.btn__close');
let contactButton = document.querySelector('#callButton');

contactButton.addEventListener('click', function(){
	popup.classList.add('popup--active');
});

popupClose.addEventListener('click', function(){
	popup.classList.remove('popup--active');
});