const express = require('express'); // Require the Express module
const path = require('path'); // Require the Path module to work with file and directory paths
const routes = require('./routes/index'); // Import routes from the 'routes' directory's index file
const bodyParser = require('body-parser'); // Require the body-parser module to parse incoming request bodies

const app = express(); // Create an Express application

app.use(express.static('public')); // Serve all static files in the 'public' directory

app.set('views', path.join(__dirname, 'views')); // Set the directory for views
app.set('view engine', 'pug'); // Set Pug as the template engine

app.use(bodyParser.urlencoded({ extended: true })); // Use bodyParser to parse URL-encoded forms
app.use('/', routes); 

module.exports = app; 