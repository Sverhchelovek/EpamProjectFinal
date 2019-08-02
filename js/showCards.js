

let data = [
		
	[
		{
			"photo": "url('../img/apartment1.jpg')", 
		"price": "34800",
		"location": "Дмитриевская ул. 96/98 ",  
		"district": "Шевченковский",
		"code": "123", 
		"room":"1", 
		"square": "123",  
		"floor":"1",
		},
		{ 
			"photo": "url(../img/apartment1.jpg)", 
		"price": "120000",
		"location": "Дмитриевская ул. 96/98 ",  
		"district": "Шевченковский",
		"code": "120000", 
		"room":"1", 
		"square": "123",  
		"floor":"1",
		},
		{ 
			"photo": "url(../img/apartment1.jpg)", 
		"price": "70000",
		"location": "Дмитриевская ул. 96/98", 
		"district": "Шевченковский", 
		"code": "123", 
		"room":"1", 
		"square": "123",  
		"floor":"1",
		}
	],

	[
 		{
      	"photo": "url('../img/apartment1.jpg')", 
        "price": "453321",
        "location": "Дмитриевская ул. 96/98 ",  
        "district": "Шевченковский",
        "code": "123", 
        "room":"1", 
        "square": "123",  
        "floor":"1",
     	}
	],

	[

       {
      	"photo": "url('../img/apartment1.jpg')", 
        "price": "123",
        "location": "Дмитриевская ул. 96/98 ",  
        "district": "Шевченковский",
        "code": "190277", 
        "room":"1", 
        "square": "123",  
        "floor":"1",
        }
	]

];

let checkboxHouses = document.querySelector('#checkboxHouses');
let checkboxAparatments = document.querySelector('#checkboxAparatments');
let checkboxVillas = document.querySelector('#checkboxVillas');
let filter = document.querySelector('#filter');

let minPrice = document.querySelector('.priceUSD--min');
let maxPrice = document.querySelector('.priceUSD--max');
let minPriceValue;
let maxPriceValue;

function type() {

let newData = [];
let dataNext = [];
let data3 = [];
let data4 = [];


let district1 = document.querySelector('#district1');
let district2 = document.querySelector('#district2');
let district3 = document.querySelector('#district3');
let district4 = document.querySelector('#district4');
let district5 = document.querySelector('#district5');
let district6 = document.querySelector('#district6');
let district7 = document.querySelector('#district7');
let district8 = document.querySelector('#district8');
let district9 = document.querySelector('#district9');
let district10 = document.querySelector('#district10');

let districts = document.querySelectorAll('.district');

	minPriceValue = parseInt(minPrice.value);
	maxPriceValue = parseInt(maxPrice.value);


	if(checkboxHouses.checked){
		data[0].forEach( (elem) => {
			dataNext.push(elem);
		});
	}

	if(checkboxAparatments.checked){
		data[1].forEach( (elem) => {
			dataNext.push(elem);
		});
	}

	if(checkboxVillas.checked){
		data[2].forEach( (elem) => {
			dataNext.push(elem);
		});
	}

	if (!checkboxHouses.checked && !checkboxAparatments.checked && !checkboxVillas.checked) {
		data.forEach( (elem) => {
			elem.forEach( (ar) => {
				dataNext.push(ar);
			});
		});
	}

	if (maxPrice.value !== '' && minPrice.value !== '') {
		for (let i = 0; i < dataNext.length; i++) {

			if (dataNext[i].price >= minPriceValue &&  dataNext[i].price <= maxPriceValue) {
				data3.push(dataNext[i]);
			}
		}
	}

	if (maxPrice.value !== '') {
		for (let i = 0; i < dataNext.length; i++) {

			if (dataNext[i].price <= maxPriceValue) {
				data3.push(dataNext[i]);
			}
		}
	}

	if (minPrice.value !== '') {
		for (let i = 0; i < dataNext.length; i++) {

			if (dataNext[i].price >= minPriceValue) {
				data3.push(dataNext[i]);
			}
		}
	}

	if (maxPrice.value === '' && minPrice.value === '') {
		for (let i = 0; i < dataNext.length; i++) {

			data3.push(dataNext[i]);
		}
	}

	if(district1.checked){
		data3.forEach( (elem) => {
			if (elem.district == 'Голосеевский') {
				data4.push(elem);
			}
		});

	}
	if(district2.checked){
		data3.forEach( (elem) => {
			if (elem.district == 'Святошинский') {
				data4.push(elem);
			}
		});

	}
	if(district3.checked){
		data3.forEach( (elem) => {
			if (elem.district == 'Соломенский') {
				data4.push(elem);
			}
		});

	}
	if(district4.checked){
		data3.forEach( (elem) => {
			if (elem.district == 'Оболонский') {
				data4.push(elem);
			}
		});

	}
	if(district5.checked){
		data3.forEach( (elem) => {
			if (elem.district == 'Подольский') {
				data4.push(elem);
			}
		});

	}
	if(district6.checked){
		data3.forEach( (elem) => {
			if (elem.district == 'Печерский') {
				data4.push(elem);
			}
		});

	}
	if(district7.checked){
		data3.forEach( (elem) => {
			if (elem.district == 'Шевченковский') {
				data4.push(elem);
			}
		});

	}
	if(district8.checked){
		data3.forEach( (elem) => {
			if (elem.district == 'Дарницкий') {
				data4.push(elem);
			}
		});

	}
	if(district9.checked){
		data3.forEach( (elem) => {
			if (elem.district == 'Днепровский') {
				data4.push(elem);
			}
		});

	}
	if(district10.checked){
		data3.forEach( (elem) => {
			if (elem.district == 'Днепровский') {
				data4.push(elem);
			}
		});

	}

	if (!district2.checked && !district3.checked && !district4.checked && !district5.checked && !district6.checked && !district7.checked && !district1.checked && !district8.checked && !district9.checked && !district10.checked ) {
		console.log(data3);
	} else {
		console.log(data4);
	}

// 	for(let checke of checks){
// 		  if(checke.checked = true){
//   let generateCards3 = data4.map(function(name) {
//   let subarray = [];
//   for (let z = 0; z <Math.ceil(data4.length/size); z++){
//     subarray[z] = data4.slice((z*size), (z*size) + size);
// }
//   return subarray;
// });
//   }
// 	}

}; 

filter.addEventListener('click', function() {
	type();
});


let checks = document.querySelectorAll('.check');

for(let check of checks){
	check.addEventListener('click', function(){
		type();
	})
}




// let generateCards5 = data4.map(function(name) {
//   return name.length;
// });

// let generateCards10 = data4.map(function(name) {
//   return name.length;
// });
