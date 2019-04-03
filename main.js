
let tempDisplay = document.getElementById("citydisplay");
let but = document.getElementById("cc");
let randomTemp1 = [30,30.1,30.2,30.3,];
let submit = document.getElementById("next");
const cities = ["Dallas,us","Austin,us","Houston,us","Atlanta,us","Chicago,us","Charlotte,us","Memphis,us","Nashville,us","Cleveland,us","Detroit,us","Boston,us","Albany,us","Buffalo,us","Philadelphia,us","Orlando,us","Miami,us","Tampa,us","Jacksonville,us","Charleston,us","Tallahassee,us","Savannah,us","Baltimore,us","Washington,us","Omaha,us","Los Angeles,us","Fresno,us","San Diego,us","San Francisco,us","Seattle,us","Portland,us","Denver,us","San Antonio,us","New Orleans,us","New York,us","Richmond,us","Sacramento,us","Phoenix,us","Reno,us","Las Vegas,us","Salt Lake City,us","Kansas City,us","Lousville,us","Columbus,us","Fort Worth,us",];

function hey(){
    //This generates a random city
let randomCity = cities[Math.floor(Math.random() * cities.length)];
//This is the total api link with the random city added
let apiurl = 'http://api.openweathermap.org/data/2.5/weather?q=' + randomCity
+ '&units=imperial&appid=fe38aa42989f5e2ebc9d4fca513c3117';
//this retreives the data from the api
fetch(apiurl)
    .then(response => response.json())
    .then(data => {
        //this displays the temp
//tempDisplay.innerHTML = data.main.temp; 
tempDisplay.innerHTML = randomCity;
    });
    
console.log(randomCity);

        }

        submit.addEventListener("click",hey);

        