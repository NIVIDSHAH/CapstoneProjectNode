const express = require('express');
const bodyParser = require('body-parser');  //Bodyparser populates the req.body property with the parsed body

//The Node.js file system module allows you to work with the file system on your computer
const fs = require("fs");    
const { json } = require('body-parser');
//This line imports express module and creates express application
const app = express();
//Imports data.json file that we have made
const data = require('./data.json');




app.use(bodyParser.urlencoded({ extended: true}));
app.use("/static", express.static("public"));
app.use(express.static(__dirname + 'public'));


// code here for adding static assets
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'pug');   //Sets the viewengine to "PUG"

app.get('/', (req, res) => {
    //Line below gets the project objects and passes the value in the data
    res.render('index',{data:data.projects});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/project/:id', (req, res) => {
    ///Requesting parameters gives the value of the number of element we are fetching from the projects array
    res.render('project',{data:data.projects, projectId:req.params.id,tech:req.params.technologies});
});

//Just a message stating application is running on port number 3000
app.listen(3000, function()  {
    console.log('The application is running on localhost:3000!')
});