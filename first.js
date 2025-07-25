function updateTemp(response){  
const element = document.getElementById('weather-info');
element.innerHTML = `Todays Temperature : ${response.current.temp_c}`;
}


document.querySelector('button').addEventListener('click', ()=>{
        const place = document.getElementById('location').value;
        
        const prom = fetch(`https://api.weatherapi.com/v1/current.json?key=ced0b101011a4a96b6b83615252407&q=${place}&aqi=no`)
       
        prom
        .then(response=>response.json())
        .then(response=>updateTemp(response))
        .catch(error => console.error('Error fetching weather :', error));
    
}); 