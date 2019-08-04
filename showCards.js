let data = [		
	[
		{
		"photo": "url('img/apartment1.jpg')", 
		"price": "34800",
		"location": "Дмитриевская ул. 96/98 ",  
		"district": "Шевченковский",
		"code": "123", 
		"room":"1", 
		"square": "123",  
		"floor":"1",
		"type": "Дом"
		},
		{ 
		"photo": "url(img/apartment1.jpg)", 
		"price": "120000",
		"location": "Дмитриевская ул. 96/98 ",  
		"district": "Шевченковский",
		"code": "120000", 
		"room":"1", 
		"square": "123",  
		"floor":"1",
		"type": "Дом"
		},
		{ 
		"photo": "url(img/apartment1.jpg)", 
		"price": "70000",
		"location": "Дмитриевская ул. 96/98", 
		"district": "Шевченковский", 
		"code": "123", 
		"room":"1", 
		"square": "123",  
		"floor":"1",
		"type": "Дом"
		}
	],

	[
 		{
      	"photo": "url('img/apartment1.jpg')", 
        "price": "453321",
        "location": "Дмитриевская ул. 96/98 ",  
        "district": "Шевченковский",
        "code": "123", 
        "room":"1", 
        "square": "123",  
        "floor":"1",
        "type": "Квартира"
     	}
	],

	[
       {
      	"photo": "url('img/apartment1.jpg')", 
        "price": "123",
        "location": "Дмитриевская ул. 96/98 ",  
        "district": "Шевченковский",
        "code": "190277", 
        "room":"1", 
        "square": "123",  
        "floor":"1",
        "type": "Вилла"
        }
	]

];
 
let checkboxHouses 		= document.querySelector('#checkboxHouses');
let checkboxAparatments = document.querySelector('#checkboxAparatments');
let checkboxVillas 		= document.querySelector('#checkboxVillas');
let minPrice 			= document.querySelector('.priceUSD--min');
let maxPrice 			= document.querySelector('.priceUSD--max');
let checks 				= document.querySelectorAll('.check');
let prices 				= document.querySelectorAll('.priceUSD');
let cards 				= document.querySelector('.cards');
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
							<span class="price--orange"> </span><br>
						</div>
						<div class="adress">
							<span class="district"></span>
							<p class="location"> Продажа в Киеве, </p>
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
		card.innerHTML = cardTemplate
		card.classList.add('card');
		cards.appendChild(card);
};

let renderProjects = () => {
	for (let i = 0; i < arrayToRender.length; i++) {
		createCard();
		let photo = document.querySelectorAll('.photo');
		photo[i].style.backgroundImage = arrayToRender[i].photo
		let price = document.querySelectorAll('.price--orange');
		price[i].innerText = `$ ${arrayToRender[i].price} `;
		let location = document.querySelectorAll('.location');
		location[i].innerText = arrayToRender[i].location;
		let district = document.querySelectorAll('.district');
		district[i].innerHTML = ` Продажа квартиры в Киеве, <br> ${arrayToRender[i].district}`;
		let code = document.querySelectorAll('.code');
		code[i].innerText = arrayToRender[i].code;
		let type = document.querySelectorAll('.type');
		type[i].innerText = arrayToRender[i].type;
		let room = document.querySelectorAll('.room');
		room[i].innerText = arrayToRender[i].room;
		let square = document.querySelectorAll('.square');
		square[i].innerText = arrayToRender[i].square;
		let floor = document.querySelectorAll('.floor');
		floor[i].innerText = arrayToRender[i].floor;
	}
};

function filter() {
arrayToRender = [];
cards.innerHTML = '';
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



