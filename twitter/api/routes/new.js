const express = require('express');
const router = express.Router();
const New = require('../model/new');
const mongoose = require('mongoose'); 

router.post('/',(req,res,next)=>
{
	const tweet = new New ({
		_id : new mongoose.Types.ObjectId,
		username : req.body.username,
		tweet : req.body.tweet,
		likes : req.body.likes

	});



tweet.save()
.then(result=>{
	console.log(result);
	res.status(200).json({
		newTweet : result
						})
				})

.catch(err=>{
	console.log(err);
	res.status(500).json({
		error : err
	})
})

});

module.exports = router;
