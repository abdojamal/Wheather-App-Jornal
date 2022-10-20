// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();

const bodyParser = require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));


// Setup Server
const port = 8000;
const listening = () =>
console.log(`Server is http://${port}/`);
app.listen(port, listening);


// GET Route
app.get("/all", getData )
function getData (req, res) { 
    res.send(projectData);
    return(projectData)
      };

// POST Route
app.post("/add", postData)

function postData (req, res){
  projectData = req.body;
  console.log(projectData);
}




