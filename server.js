const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const placesApiRouter = require('./server/routes/placesApiRoute');
const cors = require('cors');
const path = require('path');

mongoose.Promise = global.Promise;

// Connecting to the database
const DATABASE_NAME = process.env.DATABASE_NAME;
const PORT = process.env.PORT || 3000;

mongoose.connect(DATABASE_NAME, {useNewUrlParser: true})
	.then(() => {
		console.log('Successfully connected to the database');
	})
	.catch(err => {
		console.log(`Could not connect to the database. Exiting now...${err}`);
		process.exit(0);
	});

const app = express();

let myLogger = (req, res, next) => {
	console.log('LOGGED');
	next();
};

let requestTime = (req, res, next) => {
	req.requestTime = Date.now();
	next();
};

app.use(cors());
app.use(morgan('short'));
app.use(myLogger);
app.use(requestTime);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/build')));

app.use('/api/places', placesApiRouter);

app.use((req, res) => {
	res.status(404).send('Page not found. Try another.');
});

let mode = process.env.NODE_ENV || 'development';

app.listen(+PORT, () => {
	console.log(`Process ${process.pid} is listening to all incoming requests
		mode: ${mode} 
		Server listening on port: ${+PORT}`);
});

