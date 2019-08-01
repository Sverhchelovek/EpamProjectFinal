let houses = [
       {
      	"photo": "url('../img/apartment1.jpg')", 
        "price": "34800",
        "location": "Дмитриевская ул. 96/98 ",  
        "district": "Шевченковский р-он",
        "code": "123", 
        "room":"1", 
        "square": "123",  
        "floor":"1",
        },
       { 
      	"photo": "url(../img/apartment1.jpg)", 
        "price": "120000",
        "location": "Дмитриевская ул. 96/98 ",  
        "district": "Шевченковский р-он",
        "code": "120000", 
        "room":"1", 
        "square": "123",  
        "floor":"1",
        },
       { 
      	"photo": "url(../img/apartment1.jpg)", 
        "price": "70000",
        "location": "Дмитриевская ул. 96/98", 
        "district": "Шевченковский р-он", 
        "code": "123", 
        "room":"1", 
        "square": "123",  
        "floor":"1",
        }
];

let apartments = [
       {
      	"photo": "url('../img/apartment1.jpg')", 
        "price": "453321",
        "location": "Дмитриевская ул. 96/98 ",  
        "district": "Шевченковский р-он",
        "code": "123", 
        "room":"1", 
        "square": "123",  
        "floor":"1",
        }
       // { 
      	// "photo": "url(../img/apartment1.jpg)", 
       //  "price": "123",
       //  "location": "Дмитриевская ул. 96/98 ",  
       //  "district": "Шевченковский р-он",
       //  "code": "123", 
       //  "room":"1", 
       //  "square": "123",  
       //  "floor":"1",
       //  },
       // { 
      	// "photo": "url(../img/apartment1.jpg)", 
       //  "price": "123",
       //  "location": "Дмитриевская ул. 96/98", 
       //  "district": "Шевченковский р-он", 
       //  "code": "123", 
       //  "room":"1", 
       //  "square": "123",  
       //  "floor":"1",
       //  }
];

let villas = [
       {
      	"photo": "url('../img/apartment1.jpg')", 
        "price": "123",
        "location": "Дмитриевская ул. 96/98 ",  
        "district": "Шевченковский р-он",
        "code": "190277", 
        "room":"1", 
        "square": "123",  
        "floor":"1",
        }
       // { 
      	// "photo": "url(../img/apartment1.jpg)", 
       //  "price": "123",
       //  "location": "Дмитриевская ул. 96/98 ",  
       //  "district": "Шевченковский р-он",
       //  "code": "123", 
       //  "room":"1", 
       //  "square": "123",  
       //  "floor":"1",
       //  },
       // { 
      	// "photo": "url(../img/apartment1.jpg)", 
       //  "price": "123",
       //  "location": "Дмитриевская ул. 96/98", 
       //  "district": "Шевченковский р-он", 
       //  "code": "123", 
       //  "room":"1", 
       //  "square": "123",  
       //  "floor":"1",
       //  }
];

let cards = document.querySelector('.cards');

let projects = [];


let minPrice = document.querySelector('.priceUSD--min');
let maxPrice = document.querySelector('.priceUSD--max');
let minPriceValue;
let maxPriceValue;

let checkboxHouses = document.querySelector('#checkboxHouses');
let checkboxAparatments = document.querySelector('#checkboxAparatments');
let checkboxVillas = document.querySelector('#checkboxVillas');



for (let i = 0; i < houses.length; i++) {
	houses[i].type = 'Дом';
	projects.push(houses[i]);
}
for (let i = 0; i < apartments.length; i++) {
	apartments[i].type = 'Квартира';
	projects.push(apartments[i]);
}
for (let i = 0; i < villas.length; i++) {
	villas[i].type = 'Вилла';
	projects.push(villas[i]);
}

let renderProjects = () => {
	for (let i = 0; i < projects.length; i++) {
		let card  = document.createElement('div');
			card.innerHTML = `
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

			card.classList.add('card');
			cards.appendChild(card);
			let photo = document.querySelectorAll('.photo');
			photo[i].style.backgroundImage = projects[i].photo

			let price = document.querySelectorAll('.price--orange');
			price[i].innerText = `$ ${projects[i].price} `;

			let location = document.querySelectorAll('.location');
			location[i].innerText = projects[i].location;

			let district = document.querySelectorAll('.district');
			district[i].innerHTML = ` Продажа квартиры в Киеве, <br> ${projects[i].district}`;

			let code = document.querySelectorAll('.code');
			code[i].innerText = projects[i].code;

			let type = document.querySelectorAll('.type');
			type[i].innerText = projects[i].type;

			let room = document.querySelectorAll('.room');
			room[i].innerText = projects[i].room;

			let square = document.querySelectorAll('.square');
			square[i].innerText = projects[i].square;

			let floor = document.querySelectorAll('.floor');
			floor[i].innerText = projects[i].floor;
	}
};

renderProjects();

let filterPrise = () => {
	// при вводі оновлюємо значення
	minPriceValue = parseInt(minPrice.value);
	maxPriceValue = parseInt(maxPrice.value);

	// Якщо поле max порожнє, робимо превірку по min
	if (maxPrice.value === '') {
		projects = [];
		cards.innerHTML = '';
		for (let i = 0; i < houses.length; i++) {
			if(parseInt(houses[i].price) >= minPriceValue) {
				projects.push(houses[i]);
			}
		}
		renderProjects();
	}
	// Якщо поле min порожнє, робимо превірку по max
	if (minPrice.value === '') {
		projects = [];
		cards.innerHTML = '';
		for (let i = 0; i < houses.length; i++) {
			if(parseInt(houses[i].price) <= maxPriceValue) {
				projects.push(houses[i]);
			}
		}
		renderProjects();
	}
	// Якщо обидва порожні
	if (maxPrice.value === '' && minPrice.value === '') {
		projects = [];
		cards.innerHTML = '';
		for (let i = 0; i < houses.length; i++) {
			projects.push(houses[i]);
		}
		renderProjects();
	}
	// Якщо обидва заповнені
	if (maxPrice.value !== '' && minPrice.value !== '') {
		projects = [];
		cards.innerHTML = '';
		for (let i = 0; i < houses.length; i++) {
			if(parseInt(houses[i].price) <= maxPriceValue && parseInt(houses[i].price) >= minPriceValue) {
				projects.push(houses[i]);
			}
		}
		renderProjects();
	}
};

// let filterType = () => {

	// let checkedProjects = [];

// 	if(checkboxHouses.checked) {
// 		for (let i = 0; i < houses.length; i++) {
// 			checkedProjects.push(houses[i]);
// 			console.log('sdf');
// 		}
// 	}

// 	if(checkboxApartments.checked) {
// 		for (let i = 0; i < apartments.length; i++) {
// 			checkedProjects.push(apartments[i]);
// 			console.log('sddddddf');
// 		}
// 	}

// 	if(checkboxVillas.checked) {
// 		for (let i = 0; i < villas.length; i++) {
// 			checkedProjects.push(villas[i]);
// 			console.log('ssssdf');
// 		}
// 	}

// };

// let filterPrise = () => {
// 	// при вводі оновлюємо значення
// 	minPriceValue = parseInt(minPrice.value);
// 	maxPriceValue = parseInt(maxPrice.value);

// 	// Якщо поле max порожнє, робимо превірку по min
// 	if (maxPrice.value === '') {
// 		projects = [];
// 		cards.innerHTML = '';
// 		for (let i = 0; i < checkedProjects.length; i++) {
// 			if(parseInt(checkedProjects[i].price) >= minPriceValue) {
// 				projects.push(checkedProjects[i]);
// 			}
// 		}
// 		renderProjects();
// 	}
// 	// Якщо поле min порожнє, робимо превірку по max
// 	if (minPrice.value === '') {
// 		projects = [];
// 		cards.innerHTML = '';
// 		for (let i = 0; i < checkedProjects.length; i++) {
// 			if(parseInt(checkedProjects[i].price) <= maxPriceValue) {
// 				projects.push(checkedProjects[i]);
// 			}
// 		}
// 		renderProjects();
// 	}
// 	// Якщо обидва порожні
// 	if (maxPrice.value === '' && minPrice.value === '') {
// 		projects = [];
// 		cards.innerHTML = '';
// 		for (let i = 0; i < checkedProjects.length; i++) {
// 			projects.push(checkedProjects[i]);
// 		}
// 		renderProjects();
// 	}
// 	// Якщо обидва заповнені
// 	if (maxPrice.value !== '' && minPrice.value !== '') {
// 		projects = [];
// 		cards.innerHTML = '';
// 		for (let i = 0; i < checkedProjects.length; i++) {
// 			if(parseInt(checkedProjects[i].price) <= maxPriceValue && parseInt(checkedProjects[i].price) >= minPriceValue) {
// 				projects.push(checkedProjects[i]);
// 			}
// 		}
// 		renderProjects();
// 	}
// };

let filter = () => {
	filterPrise();
};

minPrice.addEventListener('input', function(){
	filter();
});


maxPrice.addEventListener('input', function(){
	filter();
});





// checkboxHouses.addEventListener('change', function() {

// });




