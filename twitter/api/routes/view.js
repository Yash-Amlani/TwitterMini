const express = require('express');
const router = express.Router();
const tweetNew = require('../model/new');
const mongoose = require('mongoose'); 

router.get('/',(req,res,next)=>
{
	tweetNew.find()
	.then(result=>{
		res.send(result);
		res.status(200).json({
			tweetData : result
		})
	})
	.catch(err=>{
		console.log(err);
		res.status(500).json({
			error : error
		})
	})
});

router.get('/:id',(req,res,next)=>{
	console.log(req.params.id);
	tweetNew.findById(req.params.id)
		.then(result=>{
			res.status(200).json({

									tweetData : result
								})
						})
		.catch(err=>{
			console.log(err);
			res.status(500).json({
				error : err
			})
		})

})

module.exports = router;
