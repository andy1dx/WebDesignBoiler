// be able to use .env file
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware

app.use(bodyParser.json());
app.use(cors());

//routing Setup

// Set static  folder for route
require('./routes/users.route')(app);


app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/dist/index.html'))
});

app.on("error", function(err) {
  console.log(err);
})

// Set port
app.set('port', (process.env.PORT || 3000));

// Check if it is connected
app.listen(app.get('port'), function() {
	console.log('Server started at port: '+ app.get('port'));
}).on('error', (err) => {
  console.log('On error handler');
  console.log(err);
});

process.on('uncaughtException', (err) => {
  console.log('Process.on handler');
  console.log(err);
})
