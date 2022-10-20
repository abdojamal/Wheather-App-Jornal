# Weather-Journal App Project

## Overview
* This is an asynchronous web app that uses Web API and user data to dynamically update the UI.
 ### Instructions :
- The User Inputs the zip code of a city (in USA) and write the feeling and the app will generate:

1. City's WEATHER of the Day
2. Date
3. Write What user feel


## Installation
---
#### Server Side :
1. first step install express and it's middleware and then require them in the server side file. 
2. set port to 8000 .
3. make GET and POST requists.
#### Clint Side : 
1. set global var of url and my api key 
2. generateWeatherData() function is called by clicking on generat button and call the othe async functions which is :
* weatherData(zipCode) is used to fetch api data usin api url and my api code and zip code that entred by user, and then turn the data into JSON.
* .then function that sets data into object
* postData() is a POST request function to post the data the user requests .

* retrieveData() is a function that updates the UI .

### Dependencies :
1. node js express framework 
2. install cors 
3. install body-parser

---

## Author's Name 
 Abdulrahman Jamal

---

## Credits 
---
* learn more about node js and express from [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

* learn more about **Routing** from [Expressjs.com](https://expressjs.com/en/guide/routing.html)

* learn more about **Fetch API** from [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

* learn more about **Chain Promises** from [javascript.info](https://javascript.info/promise-chaining)

