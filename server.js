require('dotenv').config();

// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const email = process.env.email;
const superSecretPwd = process.env.superSecretPwd;


// Create an instance of the express app.
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Redirect to https://divensnorkeltulum.com
const targetBaseUrl = 'https://www.divensnorkeltulum.com/inicio';



// Routes
app.get('/', function (req, res) {
    res.redirect(targetBaseUrl);
    // res.render('inicio')

});
app.get('/inicio', function (req, res) {
    res.render('inicio')
});
app.get('/privacidad', function (req, res) {
    res.render('privacidad')
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
