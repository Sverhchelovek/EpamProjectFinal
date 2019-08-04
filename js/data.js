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
		"location": "Дмитриевская ул. 96/98 1",  
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
		"location": "Дмитриевская ул. 96/98 2", 
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
	    "location": "Дмитриевская ул. 96/98 3",  
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

data = JSON.stringify(data);
localStorage.setItem('data', data);