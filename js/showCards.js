data = localStorage.getItem('data');
data = JSON.parse(data);





let checkboxHouses 		= document.querySelector('#checkboxHouses');
let checkboxAparatments = document.querySelector('#checkboxAparatments');
let checkboxVillas 		= document.querySelector('#checkboxVillas');
let minPrice 			= document.querySelector('.priceUSD--min');
let maxPrice 			= document.querySelector('.priceUSD--max');
let checks 				= document.querySelectorAll('.check');
let prices 				= document.querySelectorAll('.priceUSD');
let cards 				= document.querySelector('.cards');
let paginations		    = document.querySelectorAll('.founded-cards__link ');
let minPriceValue;
let maxPriceValue;
let arrayFilteredByType;
let arrayFilteredByPrice;
let arrayFilteredByDistrict;
let arrayToRender;

let districtNames = [
	'Голосеевский',
	'Святошинский',
	'Соломенский',
	'Оболонский',
	'Подольский',
	'Печерский',
	'Шевченковский',
	'Дарницкий',
	'Днепровский',
	'Деснянский',
];

let cardTemplate = `
					<div class="card__photo photo">
						
					</div>
					<div class="card__text">
						<div class="price">
							<span class="price--orange">$ </span><span class="price--orange price-value"> </span><br>
						</div>
						<div class="adress">
							<span>Район: </span><span class="dist"></span>
							<p class="location"></p>
						</div>
						<a href="" class="button button__details">Details</a>
					</div>
					<ul class="card__description">
						<li>
							<span>Код: </span><span class="code"></span>
						</li>
						<li>
							<span>Тип: </span><span class="type"></span>
						</li>
						<li>
							<span>Комната: </span><span class="room"></span>
						</li>
						<li>
							<span>Площа кв.м.: </span><span class="square"></span>
						</li>
						<li>
							<span>Поверх: </span><span class="floor"></span>
						</li>
					</ul>
			`;

let filterByType = () => {
	arrayFilteredByType = [];
	if(checkboxHouses.checked){
		data[0].forEach( (elem) => {
			arrayFilteredByType.push(elem);
		});
	}
	if(checkboxAparatments.checked){
		data[1].forEach( (elem) => {
			arrayFilteredByType.push(elem);
		});
	}
	if(checkboxVillas.checked){
		data[2].forEach( (elem) => {
			arrayFilteredByType.push(elem);
		});
	}
	if (!checkboxHouses.checked && !checkboxAparatments.checked && !checkboxVillas.checked) {
		data.forEach( (elem) => {
			elem.forEach( (ar, i) => {
				arrayFilteredByType.push(ar);
			});
		});
	}
};

let filterByPrice = () => {
	minPriceValue = parseInt(minPrice.value);
	maxPriceValue = parseInt(maxPrice.value);
	if (maxPrice.value !== '') {
		arrayFilteredByPrice = [];
		for (let i = 0; i < arrayFilteredByType.length; i++) {

			if (arrayFilteredByType[i].price <= maxPriceValue) {
				arrayFilteredByPrice.push(arrayFilteredByType[i]);
			}
		}
	}
	if (minPrice.value !== '') {
		arrayFilteredByPrice = [];
		for (let i = 0; i < arrayFilteredByType.length; i++) {
			if (arrayFilteredByType[i].price >= minPriceValue) {
				arrayFilteredByPrice.push(arrayFilteredByType[i]);
			}
		}
	}
	if (maxPrice.value !== '' && minPrice.value !== '') {
		data3 = [];
		for (let i = 0; i < arrayFilteredByType.length; i++) {
			if (arrayFilteredByType[i].price >= minPriceValue &&  arrayFilteredByType[i].price <= maxPriceValue) {
				arrayFilteredByPrice.push(arrayFilteredByType[i]);
			}
		}
	}
	if (maxPrice.value === '' && minPrice.value === '') {
		arrayFilteredByPrice = [];
		for (let i = 0; i < arrayFilteredByType.length; i++) {

			arrayFilteredByPrice.push(arrayFilteredByType[i]);
		}
	}
};


filterByDistrict = () => {
	arrayFilteredByDistrict = [];
	let districts = document.querySelectorAll('.district');
	for (let i = 0; i < districts.length; i++) {
		if (districts[i].checked) {
			arrayFilteredByPrice.forEach( (elem, index) => {
				if (elem.district == districtNames[i]) {
					arrayFilteredByDistrict.push(elem);
				}
			});
		}
	}
	if (!district2.checked && !district3.checked && !district4.checked && !district5.checked && !district6.checked && !district7.checked && !district1.checked && !district8.checked && !district9.checked && !district10.checked ) {
		arrayFilteredByPrice.forEach( (elem) => {
			arrayToRender.push(elem);
		} );
	} else {
		arrayFilteredByDistrict.forEach( (elem) => {
			arrayToRender.push(elem);
		} );
	}
};

let createCard = () => {
	let card  = document.createElement('div');
		card.innerHTML = cardTemplate;
		card.classList.add('card');
		cards.appendChild(card);
};



let numberToShow = 2;
// let str = arrayToRender.filter((x, i) => (i%numberToShow)==0).map((x, i) => i+1);

// console.log(str);


let start;
let end;
// let end   = arrayToRender.length;




let renderProjects = (start = 0, end = 1) => {
	cards.innerHTML = '';


	for (let i = start-1; i <= end-1; i++) {
		createCard();

		let photo 	 = document.querySelectorAll('.photo');
		let price 	 = document.querySelectorAll('.price-value');
		let location = document.querySelectorAll('.location');
		let dist 	 = document.querySelectorAll('.dist');
		let code 	 = document.querySelectorAll('.code');
		let type 	 = document.querySelectorAll('.type');
		let room 	 = document.querySelectorAll('.room');
		let square 	 = document.querySelectorAll('.square');
		let floor 	 = document.querySelectorAll('.floor');
		photo[i].style.backgroundImage = arrayToRender[i].photo
		// price[i].innerText = arrayToRender[i].price;
		price[i].innerText = i+1;
		location[i].innerText = arrayToRender[i].location;
		dist[i].innerText = arrayToRender[i].district;
		code[i].innerText = arrayToRender[i].code;
		type[i].innerText = arrayToRender[i].type;
		room[i].innerText = arrayToRender[i].room;
		square[i].innerText = arrayToRender[i].square;
		floor[i].innerText = arrayToRender[i].floor;
		
	}
};

function filter() {
		arrayToRender = [];
	filterByType();
filterByPrice();
filterByDistrict();
renderProjects();
};

filter();

for(let check of checks){
	check.addEventListener('click', function(){
		filter();
	});
}
for(let price of prices){
	price.addEventListener('input', function(){
		filter();
	});
}

for (let pagination of paginations) {
	pagination.addEventListener('click', function(e) {
		e.preventDefault();
		let paginationNum = pagination.getAttribute('id');
		start = paginationNum;
		end   = start + 1;
		renderProjects(start, end);

		console.log(paginationNum);
	});
}

