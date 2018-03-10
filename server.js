// Import the server framework
const express = require('express')
const path = require('path');
const app = express()

// Integrate Express-Middleware
const clientDirectory = path.join(__dirname, 'client');
app.use('/', express.static(clientDirectory))

// Listen on the port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
