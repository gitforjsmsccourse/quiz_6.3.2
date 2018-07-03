console.log('you are at ' + window.location);

//document.getElementsByTagName('div')
//document.getElementsByClassName('myClassName')
//document.getElementsById('myIdName')
//document.querySelector('anySelector')
//document.querySelectorAll('allSelector')

const APIKey = '38d998a1ef92083a198db0f97499cbee';
var city = '';
var url = 'http://api.openweathermap.org/data/2.5/weather?q=';


const loc = document.querySelector('.location');
const temp = document.querySelector('.temperature');
const windSpeed = document.querySelector('.windSpeed');
const townNameForm = document.forms[0]; 

townNameForm.onsubmit = function(e) {
	e.preventDefault();
	city = townNameForm.elements.townName.value;
	console.log(city);
	
	url += city + '&appid=' + APIKey;
	
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false); // false - synchronically
	xhr.send();

	if (xhr.status != 200) {
		console.log(xhr.status + ' ' + xhr.statusText);
		
		loc.innerHTML = "";
		temp.innerHTML = "";
		windSpeed.innerHTML = "";
	} else {
		var DATA = JSON.parse(xhr.responseText);
		console.log(DATA);
		
		loc.innerHTML = DATA.name;
		temp.innerHTML = Math.round(Number.parseFloat(DATA.main.temp) - 273.15);
		windSpeed.innerHTML = DATA.wind.speed;
		
	}
}


