let data = [		
	[
		{
		"photo": "url('img/house1.jpg')", 
		"price": "340800",
		"location": "Дмитриевская ул. 96/98 ",  
		"district": "Оболонский",
		"code": "23", 
		"room":"5", 
		"square": "123",  
		"floor":"1",
		"type": "Дом"
		},
		{ 
		"photo": "url(img/house2.jpg)", 
		"price": "500000",
		"location": "Обсерваторная ул. 10",  
		"district": "Деснянский",
		"code": "577", 
		"room":"4", 
		"square": "155",  
		"floor":"3",
		"type": "Дом"
		},
		{ 
		"photo": "url(img/house3.jpg)", 
		"price": "133000",
		"location": "Гоголевская ул. 36-40", 
		"district": "Дарницкий", 
		"code": "93", 
		"room":"4", 
		"square": "117",  
		"floor":"1",
		"type": "Дом"
		},
		{ 
		"photo": "url(img/house4.jpg)", 
		"price": "133000",
		"location": "Гоголевская ул. 36-40", 
		"district": "Деснянский", 
		"code": "15", 
		"room":"5", 
		"square": "220",  
		"floor":"3",
		"type": "Дом"
		},
		{ 
		"photo": "url(img/house5.jpg)", 
		"price": "133000",
		"location": "Гоголевская ул. 36-40", 
		"district": "Печерский", 
		"code": "19", 
		"room":"3", 
		"square": "170",  
		"floor":"2",
		"type": "Дом"
		}
	],

	[
		{
		"photo": "url('img/apartment1.jpg')", 
		"price": "34800",
		"location": "Дмитриевская ул. 96/98 ",  
		"district": "Печерский",
		"code": "8", 
		"room":"1", 
		"square": "113",  
		"floor":"12",
		"type": "Квартира"
		},
		{ 
		"photo": "url(img/apartment2.jpg)", 
		"price": "500000",
		"location": "Обсерваторная ул. 10",  
		"district": "Подольский",
		"code": "577", 
		"room":"4", 
		"square": "155",  
		"floor":"3",
		"type": "Квартира"
		},
		{ 
		"photo": "url(img/apartment3.jpg)", 
		"price": "133000",
		"location": "Гоголевская ул. 36-40", 
		"district": "Днепровский", 
		"code": "93", 
		"room":"3", 
		"square": "117",  
		"floor":"7",
		"type": "Квартира"
		},
		{ 
		"photo": "url(img/apartment4.jpg)", 
		"price": "133000",
		"location": "Пирогова ул. 2/37", 
		"district": "Голосеевский", 
		"code": "54", 
		"room":"3", 
		"square": "117",  
		"floor":"7",
		"type": "Квартира"
		},
		{ 
		"photo": "url(img/apartment5.jpg)", 
		"price": "455000",
		"location": "Тургеневская ул. 22А", 
		"district": "Святошинский", 
		"code": "18", 
		"room":"5", 
		"square": "117",  
		"floor":"10",
		"type": "Квартира"
		}
	],

	[
	   {
	  	"photo": "url('img/villa1.jpg')", 
	    "price": "123",
	    "location": "Дмитриевская ул. 96/98 ",  
	    "district": "Святошинский",
	    "code": "190277", 
	    "room":"1", 
	    "square": "123",  
	    "floor":"1",
	    "type": "Вилла"
	    },
	    {
	  	"photo": "url('img/villa2.jpg')", 
	    "price": "123",
	    "location": "Дмитриевская ул. 96/98 ",  
	    "district": "Святошинский",
	    "code": "190277", 
	    "room":"1", 
	    "square": "123",  
	    "floor":"1",
	    "type": "Вилла"
	    },
	    {
	  	"photo": "url('img/villa3.jpg')", 
	    "price": "123",
	    "location": "Дмитриевская ул. 96/98 ",  
	    "district": "Святошинский",
	    "code": "190277", 
	    "room":"1", 
	    "square": "123",  
	    "floor":"1",
	    "type": "Вилла"
	    },
	    {
	  	"photo": "url('img/villa4.jpg')", 
	    "price": "123",
	    "location": "Дмитриевская ул. 96/98 ",  
	    "district": "Святошинский",
	    "code": "190277", 
	    "room":"1", 
	    "square": "123",  
	    "floor":"1",
	    "type": "Вилла"
	    },
	    {
	  	"photo": "url('img/villa5.jpg')", 
	    "price": "123",
	    "location": "Дмитриевская ул. 96/98 ",  
	    "district": "Святошинский",
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