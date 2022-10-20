/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=18a007e780255588dcdcc81d6b4a5b74&units=metric";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
// function that generates Weather Data with multiple nested async functions
function generateWeatherData(){ 
// getting value of the entered zip code and feelings from the inputs 
const zipCode = document.getElementById("zip").value;
const feelInput = document.getElementById("feelings").value;
// caling the function that fetch api data with the value of zip code and the URL
  weatherData(zipCode)
// set data for that will be post
  .then((e) => {
      let  {main: {temp}} = e ;
      const data = { 
        newDate,
        temp,
        feelInput,
        };
      postData("/add", data);
// calling the function that update the UI dynamically      
      retrieveData();
     });
};

// async f() to fetch data from the api and the turn it into JSON
const weatherData = async (zipCode) => {
  try {
    const response = await fetch(apiURL + zipCode + apiKey);
    const apiData = await response.json();
    return apiData;
  } 
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// POST data Function
const postData = async (url = "", data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    // Turn data into JSON
    const apiData = await res.json();
    console.log(apiData);
    return apiData;
  } 
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
// function to update the UI
const retrieveData = async () =>{
  const request = await fetch('/all');
  try {
  // Turn data into JSON
  const allData = await request.json()
  console.log(allData)
  // Write updated data to DOM elements
  // convert temp to celsius
  document.getElementById('temp').innerHTML = Math.round(allData.temp)+ '℃';
  document.getElementById('content').innerHTML ='Feel ' + allData.feelInput +' Today';
  document.getElementById("date").innerHTML =allData.newDate;
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
 }

 // generate the data by calling generateWeatherData() by click on Generate Button
 document.getElementById("generate").addEventListener("click", generateWeatherData);