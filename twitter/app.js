const express = require('express');
const app = express();
const viewRoute = require('./api/routes/view');
const newRoute = require('./api/routes/new');
const deleteRoute = require('./api/routes/delete');
const updateRoute = require('./api/routes/update');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var url = "mongodb://localhost:27017/twitterone";

//connecting with the database
mongoose.connect(url);
mongoose.connection.on('error',err=>{
	console.log('connection failed');
});
mongoose.connection.on('connected',connected =>{	
	console.log('Connected with DataBase');
});

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


//connecting all the routes with main file
app.use('/viewtweet',viewRoute);
app.use('/newtweet',newRoute);
app.use('/deletetweet',deleteRoute);
app.use('/updatetweet',updateRoute);
app.use('/homepage',(req,res,next)=>{
	console.log('HomePage Called')
	res.status(200).json({
		message : '/viewtweet only get operations here with and without id \n,/newtweet just pass json data with post req,/deletetweet only delete req with id,/updatetweet get and put operations here'
	})
})

app.use((req,res,next)=>{
	res.status(404).json({
		error : 'Bad Request :-)'
	})
})


module.exports = app;