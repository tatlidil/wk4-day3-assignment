require('dotenv').config(); // Load environment variables from a .env file into process.env

const mongoose = require('mongoose'); // Require the Mongoose module to manage relationships between data

mongoose.connect(process.env.DATABASE, { // Connect to the database using a URL from the environment variables
  useNewUrlParser: true, // Use the new URL parser instead of the deprecated one
  useUnifiedTopology: true // Use the new server discovery and monitoring engine
});

mongoose.connection // Access the default connection
  .on('open', () => { // When the connection is open
    console.log('Mongoose connection open'); // Log that the connection is open
  })
  .on('error', (err) => { // If there is a connection error
    console.log(`Connection error: ${err.message}`); // Log the error message
  });

require('./models/Registration'); // Require the Registration model for use with Mongoose

const app = require('./app'); // Require the Express app

const server = app.listen(3000, () => { // Start a server on port 3000 and assign to variable 'server'
  console.log(`Express is running on port ${server.address().port}`); // Log the port number the server is running on
});
