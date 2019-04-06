
let cityDisplay = document.getElementById("citydisplay");
let tempDisplay1=document.getElementById("temp1");
let tempDisplay2=document.getElementById("temp2");
let tempDisplay3=document.getElementById("temp3");
let tempDisplay4=document.getElementById("temp4");
let but = document.getElementById("cc");
let tempArray1 = [30,30.1,30.2,30.3,];
let tempArray2 = [40,42.3,43,44,45.4,44.34];
let tempArray3 = [50,23,60,61,66,32,44.6,48];
let submit = document.getElementById("next");
const cities = ["Dallas,us","Austin,us","Houston,us","Atlanta,us","Chicago,us","Charlotte,us","Memphis,us","Nashville,us","Cleveland,us","Detroit,us","Boston,us","Albany,us","Buffalo,us","Philadelphia,us","Orlando,us","Miami,us","Tampa,us","Jacksonville,us","Charleston,us","Tallahassee,us","Savannah,us","Baltimore,us","Washington,us","Omaha,us","Los Angeles,us","Fresno,us","San Diego,us","San Francisco,us","Seattle,us","Portland,us","Denver,us","San Antonio,us","New Orleans,us","New York,us","Richmond,us","Sacramento,us","Phoenix,us","Reno,us","Las Vegas,us","Salt Lake City,us","Kansas City,us","Lousville,us","Columbus,us","Fort Worth,us",];

function hey(){
    
    //This generates a random city
let randomCity = cities[Math.floor(Math.random() * cities.length)];
cityDisplay.innerHTML = randomCity;
//This is the total api link with the random city added
let apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=' + randomCity
+ '&units=imperial&appid=fe38aa42989f5e2ebc9d4fca513c3117';
//this retreives the data from the api
fetch(apiurl)
    .then(response => response.json())
    .then(data => {
        //this displays the tempgo
        
let apirray = data.main.temp;
let randomtemps1 = tempArray1[Math.floor(Math.random() * tempArray1.length)];
let randomtemps2 = tempArray2[Math.floor(Math.random() * tempArray2.length)];
let randomtemps3 = tempArray3[Math.floor(Math.random() * tempArray3.length)];
let arrayOfArrays = [apirray,randomtemps1,randomtemps2,randomtemps3];
let randomArray = arrayOfArrays.sort(() => Math.random() - 0.5);
tempDisplay1.innerHTML = randomArray[0];
tempDisplay2.innerHTML = randomArray[1];
tempDisplay3.innerHTML = randomArray[2];
tempDisplay4.innerHTML = randomArray[3];

    });
 


        }

        submit.addEventListener("click",hey);





    