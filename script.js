const getInput = document.querySelector('.userInput');
var button = document.querySelector('.btn');
const statsFetched = document.querySelector('.stats');

//addEventListener -> click
button.addEventListener('click', () => {

    //Get userInput
    const cityName = getInput.value;
    // console.log(cityName);

    //Fetch API 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=1858bfcf72912157f11f61ab07c3f81f`)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data);

            //Clear Input Field
            getInput.value = " ";

            //append data 
            statsFetched.innerHTML = `
                                <ul>
                                    <li class="description">${data.weather[0].description}</li>
                                    <li class="city">${data.name}</li>
                                    <li class="temperature">${data.main.temp}°c</li>
                                </ul>
                                `; 

        });

});