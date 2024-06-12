const apicall = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '251542b113msh8725dff62e03871p1db35djsnb98d20634d38',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements after the page is loaded
    const search = document.getElementById('search-navbar');
    const smsearch = document.getElementById('search-navbar-sm');
    const cardtitle = document.getElementById('card-title');
    const cardtemp = document.getElementById('c-temp');

	const call = async() => {
		const weatherData = await apicall('Anand');
		if (weatherData) {
			cardtitle.innerHTML = 'Anand';
			cardtemp.innerHTML = `${weatherData.feels_like}° C`;
		}
		else{
			alert("Can't reach the server");
		}
	}
	call();
``
    // Add event listeners to input fields
    search.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
            const city = search.value;
            const weatherData = await apicall(city);
            if (weatherData) {
                cardtitle.innerHTML = city;
                cardtemp.innerHTML = `${weatherData.feels_like}° C`;
            }
			else{
				alert('Please Enter Valid City Name Or Api Not Called');
			}
        }
    });

    smsearch.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
            const city = smsearch.value;
            const weatherData = await apicall(city);
            if (weatherData) {
                cardtitle.innerHTML = city;
                cardtemp.innerHTML = `${weatherData.feels_like}° C`;
            }
			else{
				alert('Please Enter Valid City Name Or Api Not Called');
			}
        }
    });
});

const anand_min_temp = document.getElementById('anand_min_temp');
const anand_max_temp = document.getElementById('anand_max_temp');
const anand_humidity = document.getElementById('anand_humidity');
const baroda_max_temp = document.getElementById('baroda_min_temp');
const baroda__min_temp = document.getElementById('baroda_max_temp');
const baroda_humidity = document.getElementById('baroda_humidity');
const rajkot_min_temp = document.getElementById('rajkot_min_temp');
const rajkot_max_temp = document.getElementById('rajkot_max_temp');
const surat_min_temp = document.getElementById('surat_min_temp');
const surat_max_temp = document.getElementById('surat_max_temp');
const surat_humidity = document.getElementById('surat_humidity');
const mumbai_min_temp = document.getElementById('mumbai_min_temp');
const mumbai_max_temp = document.getElementById('mumbai_max_temp');
const mumbai_humidity = document.getElementById('mumbai_humidity');


const surat = async function(){
	const weatherData = await apicall('surat');
	surat_min_temp.innerHTML = `${weatherData.min_temp}° C`;
	surat_max_temp.innerHTML = `${weatherData.max_temp}° C`;
	surat_humidity.innerHTML = `${weatherData.humidity}`;
	
}

surat();
const rajkot = async function(){
	const weatherData = await apicall('rajkot');
	rajkot_min_temp.innerHTML = `${weatherData.min_temp}° C`;
	rajkot_max_temp.innerHTML = `${weatherData.max_temp}° C`;
	rajkot_humidity.innerHTML = `${weatherData.humidity}`;
	
}

rajkot();

const mumbai = async function(){
	const weatherData = await apicall('mumbai');
	mumbai_min_temp.innerHTML = `${weatherData.min_temp}° C`;
	mumbai_max_temp.innerHTML = `${weatherData.max_temp}° C`;
	mumbai_humidity.innerHTML = `${weatherData.humidity}`;
	
}

mumbai();

const baroda = async function(){
	const weatherData = await apicall('baroda');
	baroda_min_temp.innerHTML = `${weatherData.min_temp}° C`;
	baroda_max_temp.innerHTML = `${weatherData.max_temp}° C`;
	baroda_humidity.innerHTML = `${weatherData.humidity}`;
	
}

baroda();
const Anand = async function(){
	const weatherData = await apicall('anand');
	anand_min_temp.innerHTML = `${weatherData.min_temp}° C`;
	anand_max_temp.innerHTML = `${weatherData.max_temp}° C`;
	anand_humidity.innerHTML = `${weatherData.humidity}`;
	
}

Anand();